"use client";

import { ReactNode, useRef, MouseEvent, useEffect } from "react";

const ItemSlider = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  const sliderContainerRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const childrenContainerRef = useRef<HTMLDivElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const previousButtonRef = useRef<HTMLButtonElement>(null);

  // needs work, progress indicator doesn't move correctly
  const moveProgressIndicator = (button: HTMLButtonElement) => {
    const slider = button
      .closest(".slider-container")!
      .querySelector(".children-container") as HTMLElement;
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index"),
    );
    const progressBar = button
      .closest(".row")!
      .querySelector(".progress-bar") as HTMLDivElement;
    const progressBarItemCount = progressBar.children.length;
    const closestTitle: HTMLElement = button
      .closest(".row")!
      .querySelector(".slider")!;

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

  const calculateProgressBar = (progressBar: Element) => {
    progressBar.innerHTML = "";
    const slider: HTMLElement = progressBar
      .closest(".row")!
      .querySelector(".children-container")!;
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

  const onButtonPress = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    const container = sliderContainerRef.current!;
    const slider = sliderRef.current!;
    const childrenContainer = childrenContainerRef.current!;
    const previous = previousButtonRef.current!;
    const next = nextButtonRef.current!;

    const gap = parseInt(
      getComputedStyle(childrenContainer).getPropertyValue("gap"),
    );
    let width = container.offsetWidth;

    const targetButton = (e.target as HTMLElement).closest("button")!;

    if (targetButton.getAttribute("data-button") === "next") {
      slider.scrollBy(width + gap, 0);
      if (slider.scrollWidth !== 0) {
        previous.style.visibility = "visible";
      }
      if (
        childrenContainer.scrollWidth - width - gap <=
        slider.scrollLeft + width
      ) {
        next.style.visibility = "hidden";
      }
    }

    if (targetButton.getAttribute("data-button") === "previous") {
      slider.scrollBy(-(width + gap), 0);
      if (slider.scrollLeft - width - gap <= 0) {
        previous.style.visibility = "hidden";
      }
      if (
        childrenContainer.scrollWidth - width - gap <=
        slider.scrollLeft + width
      ) {
        next.style.visibility = "visible";
      }
    }
  };

  useEffect(() => {
    let width = sliderContainerRef.current!.offsetWidth;

    window.addEventListener(
      "resize",
      (e) => (width = sliderContainerRef.current!.offsetWidth),
    );

    return () => {
      window.removeEventListener(
        "resize",
        () => (width = sliderContainerRef.current!.offsetWidth),
      );
    };
  }, [sliderContainerRef]);

  return (
    <section className="row flex flex-col w-3/4 border border-red-500 items-center p-4">
      <div className="flex justify-between w-full items-center p-2">
        <h3 className="m-0 text-xl">{title}</h3>
        <div className="progress-bar flex gap-2"></div>
      </div>
      <nav
        ref={sliderContainerRef}
        className={`slider-container flex w-full items-center overflow-hidden`}
      >
        <button
          data-button={"previous"}
          ref={previousButtonRef}
          onClick={(e) => onButtonPress(e)}
          aria-label={"button for showing the previous items"}
          className="button invisible rounded-l -translate-x-12 bg-opacity-20 bg-black text-[#f4f4f5] border border-[#f4f4f5] border-opacity-60 hover:bg-opacity-80 hover:bg-[#cccccf] z-10 h-fit m-0 cursor-pointer hover:text-[#09090a] active:text-[#cccccf] text-6xl items-center justify-center transition-all active:bg-[#cccccf]"
        >
          <span>&#8249;</span>
        </button>
        <div
          data-title={title}
          ref={sliderRef}
          className={`slider scroll-smooth w-full overflow-auto`}
        >
          <div
            ref={childrenContainerRef}
            className={"children-container flex gap-4 m-0 w-full"}
          >
            {children}
          </div>
        </div>
        <button
          aria-label={"button for showing the next items"}
          data-button={"next"}
          onClick={(e) => onButtonPress(e)}
          ref={nextButtonRef}
          className="button rounded-r translate-x-12 bg-opacity-20 bg-black text-[#f4f4f5] border border-[#f4f4f5] border-opacity-60 hover:bg-opacity-80 hover:bg-[#cccccf] m-0 h-fit cursor-pointer hover:text-[#09090a] active:text-[#cccccf] text-6xl flex items-center justify-center transition-all active:bg-[#cccccf]"
        >
          <span>&#8250;</span>
        </button>
      </nav>
    </section>
  );
};

export default ItemSlider;
