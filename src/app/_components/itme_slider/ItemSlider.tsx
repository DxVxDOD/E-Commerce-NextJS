"use client";

import { useEffect } from "react";

const ItemSlider = () => {
  const onButtonPress = (button: HTMLElement) => {
    const progressBar: HTMLElement = button
      .closest(".row")!
      .querySelector(".progress-bar")!;
    const slider: HTMLElement = button
      .closest(".container")!
      .querySelector(".slider")!;
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index"),
    );
    const progressBarItemCount = progressBar.children.length;

    if (button.classList.contains("prev-slide")) {
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
    if (button.classList.contains("next-slide")) {
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
    <div className="row">
      <div className="header">
        <h3 className="title">Title</h3>
        <div className="progress-bar"></div>
      </div>
      <div className="container">
        <button className="button prev-slide">
          <div className="text">&#8249;</div>
        </button>
        <div className="slider">
          <img src="https://via.placeholder.com/210/00FF00?text=1" />
          <img src="https://via.placeholder.com/220/00FF00?text=2" />
          <img src="https://via.placeholder.com/230/00FF00?text=3" />
          <img src="https://via.placeholder.com/240/00FF00?text=4" />
          <img src="https://via.placeholder.com/250/00FF00?text=5" />
          <img src="https://via.placeholder.com/260/00FF00?text=6" />
          <img src="https://via.placeholder.com/270/00FF00?text=7" />
          <img src="https://via.placeholder.com/280/00FF00?text=8" />
          <img src="https://via.placeholder.com/250/00FF00?text=9" />
          <img src="https://via.placeholder.com/260/00FF00?text=10" />
          <img src="https://via.placeholder.com/270/00FF00?text=11" />
          <img src="https://via.placeholder.com/280/00FF00?text=12" />
        </div>
        <button className="button next-slide">
          <div className="text">&#8250;</div>
        </button>
      </div>
    </div>
  );
};

export default ItemSlider;
