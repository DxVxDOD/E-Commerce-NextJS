"use client";

import { useEffect } from "react";

const AdSlider = () => {
  let intervalId: string | number | NodeJS.Timeout;

  const findPosition = (
    elements: HTMLElement[],
    position: number,
  ): HTMLElement =>
    elements.find((element) => element.dataset.pos! === `${position}`)!;

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

  const getPosition = (current: number, active: number): string => {
    if (Math.abs(current - active) > 2) return `${-current}`;
    return `${current - active}`;
  };

  const resetInterval = (elements: HTMLElement[]) => {
    clearInterval(intervalId);
    intervalId = setInterval(() => autoChangeSlide(elements), 10000);
  };

  const autoChangeSlide = (elements: HTMLElement[]) => {
    const current = findPosition(elements, 0);
    const next = findPosition(elements, 1);

    next ? update(next, elements) : update(current, elements);
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

  useEffect(() => {
    const carouselList = document.getElementById("carousel-list")!;
    const carouselItems: NodeListOf<HTMLElement> =
      document.querySelectorAll(".carousel__item");
    const elements = Array.from(carouselItems);

    carouselList.addEventListener("click", (e) => {
      const newActive = e.target! as HTMLElement;
      const isItem = newActive.closest(".carousel__item")!;
      if (!isItem || newActive.classList.contains("carousel__item_active"))
        return;
      update(newActive, elements);
      resetInterval(elements);
    });
    document.addEventListener("keydown", (e) => handleKeyPress(e, elements));
    resetInterval(elements);
  }, []);

  return (
    <section
      aria-label={"latest news"}
      className={"border border-red-500 p-4 w-[99%] h-[65vh]"}
    >
      <ul
        className={
          "flex list-none relative justify-center items-center h-full w-full"
        }
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