"use client";

import { ReactNode, useEffect } from "react";

const ItemSlider = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  const onButtonPress = (button: HTMLElement) => {
    const progressBar: HTMLElement = button
      .closest(".row")!
      .querySelector(".progress-bar")!;
    const slider: HTMLElement = button
      .closest(".progress-container")!
      .querySelector(".slider")!;
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index"),
    );
    const progressBarItemCount = progressBar.children.length;

    if (button.id === "next-slide") {
      if (sliderIndex - 1 < 0) {
        slider.style.setProperty(
          "--slider-index",
          `${progressBarItemCount - 1}`,
        );
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[progressBarItemCount - 1].classList.add("active");
      } else {
        slider.style.setProperty("--slider-index", `${sliderIndex - 1}`);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[sliderIndex - 1].classList.add("active");
      }
    }
    if (button.id === "prev-slide") {
      if (sliderIndex + 1 >= progressBarItemCount) {
        slider.style.setProperty("--slider-index", `${0}`);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[0].classList.add("active");
      } else {
        slider.style.setProperty("--slider-index", `${sliderIndex + 1}`);
        progressBar.children[sliderIndex].classList.remove("active");
        progressBar.children[sliderIndex + 1].classList.add("active");
      }
    }
  };

  const throttle = (callBackFunc: () => void, delay = 1000) => {
    const timeoutFunction = () => {
      callBackFunc();
      setTimeout(timeoutFunction, delay);
    };
    return () => {
      callBackFunc();
      setTimeout(timeoutFunction, delay);
    };
  };

  const calculateProgressBar = (progressBar: Element) => {
    progressBar.innerHTML = "";
    const slider: HTMLElement = document.querySelector(".slider")!;
    const itemCount = slider.children.length;
    const itemPerScreen = parseInt(
      getComputedStyle(slider).getPropertyValue("--items-per-screen"),
    );
    let sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index"),
    );
    const progressBarItemCount = Math.ceil(itemCount / itemPerScreen);

    if (sliderIndex >= progressBarItemCount) {
      slider.style.setProperty("--slider-index", `${progressBarItemCount - 1}`);
      sliderIndex = progressBarItemCount - 1;
    }

    for (let i = 0; i < progressBarItemCount; i++) {
      const barItem = document.createElement("div");
      barItem.classList.add("progress-item");
      if (i === sliderIndex) {
        barItem.classList.add("active");
      }
      progressBar.append(barItem);
    }
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      throttle(() => {
        const progressBar = document.querySelector(".progress-bar")!;
        calculateProgressBar(progressBar);
      }, 250),
    );

    const progressBar = document.querySelector(".progress-bar")!;
    calculateProgressBar(progressBar);

    document.addEventListener("click", (e) => {
      let button: HTMLElement;
      const eTarget = e.target as HTMLElement;
      if (eTarget.matches(".button")) {
        button = eTarget;
      } else {
        button = eTarget.closest(".button")!;
      }
      if (button !== null) onButtonPress(button);
    });
  }, []);

  return (
    <section className="row flex flex-col w-3/4 items-center p-4">
      <div className="flex justify-between w-full items-center p-4">
        <h3 className="m-0 text-xl">{title}</h3>
        <div className="progress-bar flex gap-2"></div>
      </div>
      <nav className="progress-container flex w-full items-center overflow-hidden">
        <button
          id={"prev-slide"}
          aria-label={"button for showing the previous items"}
          className="button rounded-l bg-opacity-20 bg-black text-[#f4f4f5] border border-[#f4f4f5] border-opacity-60 hover:bg-opacity-80 hover:bg-[#cccccf] z-10 h-fit m-0 cursor-pointer hover:text-[#09090a] active:text-[#cccccf] text-6xl flex items-center justify-center transition-all active:bg-[#cccccf] -translate-x-12"
        >
          <span>&#8249;</span>
        </button>
        <div className="slider flex m-0 w-full">{children}</div>
        <button
          aria-label={"button for showing the next items"}
          id={"next-slide"}
          className="button rounded-r bg-opacity-20 bg-black text-[#f4f4f5] border border-[#f4f4f5] border-opacity-60 hover:bg-opacity-80 hover:bg-[#cccccf] z-10 m-0 h-fit cursor-pointer hover:text-[#09090a] active:text-[#cccccf] text-6xl flex items-center justify-center transition-all active:bg-[#cccccf] translate-x-12"
        >
          <span>&#8250;</span>
        </button>
      </nav>
    </section>
  );
};

export default ItemSlider;
