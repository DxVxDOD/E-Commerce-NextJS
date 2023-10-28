"use client";

import { ReactNode, useEffect, useRef } from "react";
import { generateActionId } from "next/dist/build/webpack/loaders/utils";

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
      .closest(`.progress-container`)!
      .querySelector(`.slider`)!;
    const closestTitle: HTMLElement = button
      .closest(".row")!
      .querySelector(".slider")!;

    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index"),
    );
    const progressBarItemCount = progressBar.children.length;

    if (
      button.dataset.button === "next" &&
      title === closestTitle.dataset.title
    ) {
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
    if (
      button.dataset.button === "previous" &&
      title === closestTitle.dataset.title
    ) {
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

  const onButtonPress2 = (button: HTMLElement) => {
    const slider: HTMLElement = button.closest('.progress-container')!.querySelector('.slider')!
    const closestTitle: HTMLElement = button
      .closest(".row")!
      .querySelector(".slider")!;

    let width = slider.offsetWidth

    const next = document.querySelector('[data-button="next"]') as HTMLElement
    const previous = document.querySelector('[data-button="previous"]') as HTMLElement

    if( button.dataset.button === "next" &&
      title === closestTitle.dataset.title ) {
      slider.scrollBy(width + 16, 0);
      if(slider.scrollWidth !== 0) {
        previous.setAttribute('display', 'flex');
      }
      if(slider.scrollWidth - width - 16 <= slider.scrollLeft + width) {
        next.setAttribute('display', 'none');
      }
    }
    if( button.dataset.button === "previous" &&
      title === closestTitle.dataset.title ){
      slider.scrollBy(-(width + 16), 0);
      if(slider.scrollLeft - width - 16 <= 0) {
        previous.setAttribute('display', 'none');
      }
      if(slider.scrollWidth - width - 16 <= slider.scrollLeft + width) {
        next.setAttribute('display', 'flex');
      }
    }
  }

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
    const slider: HTMLElement = progressBar
      .closest(".row")!
      .querySelector(".slider")!;
    const itemCount = slider.children.length;
    const itemPerScreen = parseInt(
      getComputedStyle(slider).getPropertyValue("--items-per-screen"),
    );
    let sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index"),
    );
    const progressBarItemCount = Math.ceil(itemCount / itemPerScreen);

    slider.style.setProperty('--items-per-screen', `${Math.ceil(itemCount / 3)}`);

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
        const progressBar = document.querySelectorAll(".progress-bar")!;
        progressBar.forEach(calculateProgressBar);
      }, 250),
    );

    const progressBar = document.querySelectorAll(".progress-bar")!;
    progressBar.forEach(calculateProgressBar);

    document.addEventListener("click", (e) => {
      let button: HTMLElement;
      const eTarget = e.target as HTMLElement;
      if (eTarget.matches(".button")) {
        button = eTarget;
      } else {
        button = eTarget.closest(".button")!;
      }
      if (button !== null) onButtonPress(button);
      // if (button !== null) onButtonPress2(button);
    });
  }, []);

  useEffect(() => {

    const progressContainer: NodeListOf<HTMLElement> = document.querySelectorAll('.progress-container');

    progressContainer.forEach(container => {
      let width = container.offsetWidth;

      const slider = container.querySelector('.slider') as HTMLElement;
      const next = container.querySelector('[data-button="next"]') as HTMLButtonElement;
      const previous = container.querySelector('[data-button="previous"]') as HTMLButtonElement;

      next.addEventListener('click', e => {
        container.scrollBy(width + 16, 0);
        if (container.scrollWidth !== 0) {
          previous.setAttribute('display', 'flex');
        }
        if (slider.scrollWidth - width - 16 <= container.scrollLeft + width) {
          next.setAttribute('display', 'none');
        }
      })

      previous.addEventListener('click', e => {
        container.scrollBy(-(width + 16), 0);
        if (container.scrollLeft - width - 16 <= 0) {
          previous.setAttribute('display', 'none')
        }
        if (!(slider.scrollWidth - width - 16 <= container.scrollLeft + width)) {
          next.setAttribute('display', 'flex')
        }
      })

      window.addEventListener('resize', e => (width = container.offsetWidth));
    })

  },[])

  return (
    <section className="row border border-red-500 flex flex-col w-3/4 items-center p-4">
      <div className="flex justify-between w-full items-center p-2">
        <h3 className="m-0 text-xl">{title}</h3>
        <div className="progress-bar flex gap-2"></div>
      </div>
      <div
        className={`progress-container flex w-full items-center overflow-auto`}
      >
        <button
          data-button={"previous"}
          aria-label={"button for showing the previous items"}
          className="button rounded-l bg-opacity-20 bg-black text-[#f4f4f5] border border-[#f4f4f5] border-opacity-60 hover:bg-opacity-80 hover:bg-[#cccccf] z-10 h-fit m-0 cursor-pointer hover:text-[#09090a] active:text-[#cccccf] text-6xl flex items-center justify-center transition-all active:bg-[#cccccf] -translate-x-12"
        >
          <span>&#8249;</span>
        </button>
        <nav data-title={title} className={`slider flex gap-4 m-0 w-full`}>
          {children}
        </nav>
        <button
          aria-label={"button for showing the next items"}
          data-button={"next"}
          className="button absolute rounded-r bg-opacity-20 bg-black text-[#f4f4f5] border border-[#f4f4f5] border-opacity-60 hover:bg-opacity-80 hover:bg-[#cccccf] z-10 m-0 h-fit cursor-pointer hover:text-[#09090a] active:text-[#cccccf] text-6xl flex items-center justify-center transition-all active:bg-[#cccccf] translate-x-12"
        >
          <span>&#8250;</span>
        </button>
      </div>
    </section>
  );
};

export default ItemSlider;
