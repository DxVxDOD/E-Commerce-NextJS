"use client";

import { MouseEvent, useEffect, useRef } from "react";

const AdSlider = () => {
  const carouselListRef = useRef<HTMLUListElement>(null);

  let intervalId: string | number | NodeJS.Timeout;

  const findPosition = (
    elements: HTMLElement[],
    position: number,
  ): HTMLElement =>
    elements.find((element) => element.dataset.pos! === `${position}`)!;

  const getPosition = (current: number, active: number): string => {
    if (Math.abs(current - active) > 2) return `${-current}`;
    return `${current - active}`;
  };

  const update = (newActive: HTMLElement, elements: HTMLElement[]) => {
    const newActivePosition = newActive.dataset.pos!;
    const current = findPosition(elements, 0);
    const prev = findPosition(elements, -1);
    const next = findPosition(elements, 1);
    const first = findPosition(elements, -2);
    const last = findPosition(elements, 2);

    current.classList.remove("carousel__item_active");

    [current, prev, next, first, last].forEach(
      (item) =>
        (item.dataset.pos = getPosition(
          parseInt(item.dataset.pos!),
          parseInt(newActivePosition),
        )),
    );
  };

  const autoChangeSlide = (elements: HTMLElement[]) => {
    const current = findPosition(elements, 0);
    const next = findPosition(elements, 1);

    next ? update(next, elements) : update(current, elements);
  };

  const resetInterval = (elements: HTMLElement[]) => {
    clearInterval(intervalId);
    intervalId = setInterval(() => autoChangeSlide(elements), 10000);
  };

  const handleKeyPress = (e: KeyboardEvent, elements: HTMLElement[]) => {
    const prev = findPosition(elements, -1);
    const next = findPosition(elements, 1);
    if (e.key === "ArrowLeft" && prev) {
      update(prev, elements);
      resetInterval(elements);
    }
    if (e.key === "ArrowRight" && next) {
      update(next, elements);
      resetInterval(elements);
    }
  };

  const handleSliding = (
    e: MouseEvent<HTMLUListElement, globalThis.MouseEvent>,
  ) => {
    const carouselListChildren = carouselListRef.current!.children;
    const children = Array.from(carouselListChildren) as HTMLElement[];
    const newActive = e.target! as HTMLElement;
    const isItem = newActive.closest(".carousel__item")!;
    if (!isItem || newActive.classList.contains("carousel__item_active"))
      return;
    update(newActive, children);
    resetInterval(children);
  };

  const handleArrowKeys = (e: KeyboardEvent) => {
    const carouselListChildren = carouselListRef.current!.children;
    const children = Array.from(carouselListChildren) as HTMLElement[];

    handleKeyPress(e, children);
    resetInterval(children);
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => handleArrowKeys(e));
    return () => {
      document.removeEventListener("keydown", (e) => handleArrowKeys(e));
    };
  }, []);

  return (
    <section
      aria-label={"latest news"}
      className={"border border-red-500 p-4 w-[99%] min-h-[65vh]"}
    >
      <ul
        onClick={(e) => handleSliding(e)}
        className={
          "flex list-none relative justify-center items-center h-full w-full"
        }
        ref={carouselListRef}
        id={"carousel-list"}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        <li
          className="carousel__item w-[55vw] max-w-[1000px] aspect-video rounded absolute bg-[#09090a] border-[1px] border-opacity-[0.2] border-[#09090a]"
          data-pos="-2"
        ></li>
        <li
          className="carousel__item w-[55vw] max-w-[1000px] aspect-video rounded absolute bg-[#09090a] border-[1px] border-opacity-[0.2] border-[#09090a]"
          data-pos="-1"
        ></li>
        <li
          className="carousel__item w-[55vw] max-w-[1000px] aspect-video rounded absolute bg-[#09090a] border-[1px] border-opacity-[0.2] border-[#09090a]"
          data-pos="0"
        ></li>
        <li
          className="carousel__item w-[55vw] max-w-[1000px] aspect-video rounded absolute bg-[#09090a] border-[1px] border-opacity-[0.2] border-[#09090a]"
          data-pos="1"
        ></li>
        <li
          className="carousel__item w-[55vw] max-w-[1000px] aspect-video rounded absolute bg-[#09090a] border-[1px] border-opacity-[0.2] border-[#09090a]"
          data-pos="2"
        ></li>
      </ul>
    </section>
  );
};

export default AdSlider;
