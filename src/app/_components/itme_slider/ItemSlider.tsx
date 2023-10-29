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

  const onButtonPressOld = (button: HTMLElement) => {
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

  // needs work, progress indicator doesn't move correctly
  const moveProgressIndicator = (button: HTMLButtonElement, slider: HTMLElement) => {
    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'));
    const progressBar = button.closest('.row')!.querySelector('.progress-bar') as HTMLDivElement;
    const progressBarItemCount = progressBar.children.length;
    const closestTitle: HTMLElement = button
      .closest(".row")!
      .querySelector(".slider")!;

   if(button.dataset.button === 'next' && title === closestTitle.dataset.title) {
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
   if (button.dataset.button === 'previous' && title === closestTitle.dataset.title) {
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
  }

  const onButtonPress = (container: HTMLElement) => {
    const slider = container.querySelector('.slider') as HTMLElement;
    const childrenContainer = slider.querySelector('.children-container') as HTMLElement;
    const next = container.closest('.row')!.querySelector('[data-button="next"]') as HTMLButtonElement;
    const previous = container.closest('.row')!.querySelector('[data-button="previous"]') as HTMLButtonElement;

    const gap = parseInt(getComputedStyle(childrenContainer).getPropertyValue('gap'));
    let width = container.offsetWidth;

    next.addEventListener('click', e => {
      slider.scrollBy(width + gap, 0);
      if (slider.scrollWidth !== 0) {
        previous.style.visibility = 'visible';
      }
      if (childrenContainer.scrollWidth - width - gap <= slider.scrollLeft + width) {
        next.style.visibility = 'hidden';
      }
      // moveProgressIndicator(next, slider);
    })

    previous.addEventListener('click', e => {
      slider.scrollBy(-(width + gap), 0);
      if (slider.scrollLeft - width - gap <= 0) {
        previous.style.visibility = 'hidden';
      }
      if (childrenContainer.scrollWidth - width - gap <= slider.scrollLeft + width) {
        next.style.visibility = 'visible'
      }
      // moveProgressIndicator(previous, slider);
    })


    window.addEventListener('resize', e => (width = container.offsetWidth));
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

    const progressContainers: NodeListOf<HTMLElement> = document.querySelectorAll('.slider-container');
    progressContainers.forEach(onButtonPress);

    // window.addEventListener(
    //   "resize",
    //   throttle(() => {
    //     const progressBar = document.querySelectorAll(".progress-bar")!;
    //     progressBar.forEach(calculateProgressBar);
    //   }, 250),
    // );
    //
    // const progressBar = document.querySelectorAll(".progress-bar")!;
    // progressBar.forEach(calculateProgressBar);

  },[])

  return (
    <section className="row border border-red-500 flex flex-col w-3/4 items-center p-4">
      <div className="flex justify-between w-full items-center p-2">
        <h3 className="m-0 text-xl">{title}</h3>
        <div className="progress-bar flex gap-2"></div>
      </div>
      <button
        data-button={"previous"}
        aria-label={"button for showing the previous items"}
        className="button -translate-x-5 invisible rounded-l bg-opacity-20 bg-black text-[#f4f4f5] border border-[#f4f4f5] border-opacity-60 hover:bg-opacity-80 hover:bg-[#cccccf] z-10 h-fit m-0 cursor-pointer hover:text-[#09090a] active:text-[#cccccf] text-6xl items-center justify-center transition-all active:bg-[#cccccf]"
      >
        <span>&#8249;</span>
      </button>
      <div
        className={`slider-container flex w-full items-center overflow-hidden`}
      >
        <nav data-title={title} className={`slider scroll-smooth w-full overflow-auto`}>
          <div className={'children-container flex gap-4 m-0 w-full'} >
            {children}
          </div>
        </nav>
      </div>
      <button
        aria-label={"button for showing the next items"}
        data-button={"next"}
        className="button translate-x-5 rounded-r bg-opacity-20 bg-black text-[#f4f4f5] border border-[#f4f4f5] border-opacity-60 hover:bg-opacity-80 hover:bg-[#cccccf] m-0 h-fit cursor-pointer hover:text-[#09090a] active:text-[#cccccf] text-6xl flex items-center justify-center transition-all active:bg-[#cccccf]"
      >
        <span>&#8250;</span>
      </button>
    </section>
  );
};

export default ItemSlider;
