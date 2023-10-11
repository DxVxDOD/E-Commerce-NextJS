"use client";

import { useCallback, useEffect } from "react";

const AdSlider = () => {
  const findCurrent = (elementArray: HTMLElement[]): HTMLElement =>
    elementArray[Math.floor(elementArray.length / 2)];

  const update = useCallback(
    (newActive: HTMLElement, elements: HTMLElement[]) => {
      const newActivePosition = newActive.dataset.pos!;
      const elementArray = [] as HTMLElement[];
      for (let i = 0; i < elements.length; i++) {
        const element = elements.find((el) => parseInt(el.dataset.pos!) === i)!;
        elementArray.push(element);
      }
      console.log("update");
      const current = findCurrent(elementArray);

      current.classList.remove("carousel-list-item-active");
      elementArray.forEach(
        (item) =>
          (item.dataset.pos! = getPosition(
            parseInt(item.dataset.pos!),
            parseInt(newActivePosition),
          ).toString()),
      );
    },
    [],
  );

  const getPosition = (current: number, active: number) => {
    const diff = current - active;

    if (Math.abs(diff) > 2) return -current;
    return diff;
  };

  const autoChangeSlide = useCallback(
    (elements: HTMLElement[]) => {
      const next = elements[Math.floor(elements.length / 2) + 1];
      if (next) {
        update(next, elements);
      } else {
        update(elements[0], elements);
        console.log("update");
      }
    },
    [update],
  );

  const resetInterval = useCallback(() => {
    let intervalId = setInterval(autoChangeSlide, 2000);
    clearInterval(intervalId);
  }, [autoChangeSlide]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent, elementArray: HTMLElement[]) => {
      if (e.key === "ArrowLeft") {
        const prev = elementArray[Math.floor(elementArray.length / 2) - 1];
        if (prev) {
          update(prev, elementArray);
          resetInterval();
        }
      }
      if (e.key === "ArrowRight") {
        const next = elementArray[Math.floor(elementArray.length / 2) + 1];
        if (next) {
          update(next, elementArray);
          resetInterval();
        }
      }
    },
    [resetInterval, update],
  );

  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    const carouselList = document.getElementById("carousel-list")!;
    const carouselListItem: NodeListOf<HTMLElement> = document.querySelectorAll(
      ".carousel-list-item",
    )!;
    const elements = Array.from(carouselListItem);

    const current = findCurrent(elements);
    console.log(current);
    // current.classList.add('carousel-list-item-active')

      const mainIndex = Math.floor(elements.length / 2);

      carouselListItem[mainIndex].style.zIndex = '5';
      carouselListItem[mainIndex].style.border = 'solid red 2px';
      carouselListItem[mainIndex].style.boxShadow = '0 0 60px 0 green';

      carouselListItem[mainIndex - 1].style.filter = 'brightness(50%)'
      carouselListItem[mainIndex + 1].style.filter = 'brightness(50%)'

      carouselListItem[mainIndex - 1].style.transform = 'translateX(-15%) scale(0.9)'
      carouselListItem[mainIndex - 1].style.zIndex = '4';

      carouselListItem[mainIndex + 1].style.transform = 'translateX(15%) scale(0.9)'
      carouselListItem[mainIndex + 1].style.zIndex = '4';

      carouselListItem[mainIndex - 2].style.filter = 'brightness(20%)';
      carouselListItem[mainIndex + 2].style.filter = 'brightness(20%)';

      carouselListItem[mainIndex - 2].style.transform = 'translateX(-25%) scale(0.8)'
      carouselListItem[mainIndex - 2].style.zIndex = '3';

      carouselListItem[mainIndex + 2].style.transform = 'translateX(25%) scale(0.8)'
      carouselListItem[mainIndex + 2].style.zIndex = '3';

    carouselList.addEventListener("click", (e) => {
      const newActive = e.target! as HTMLElement;
      const isItem = newActive.closest(".carousel-list-item")!;

      if (!isItem || newActive.classList.contains("carousel-list-item-active"))
        return;
      update(newActive, elements);
    });
    document.addEventListener("keydown", (e) => {
      handleKeyDown(e, elements);
    });
    resetInterval();
  }, [handleKeyDown, resetInterval, update]);

  return (
    <nav className={"min-h-screen mb-[8rem] mt-[4rem] border-red-500 border"}>
      <div className={"w-screen mt-[12vh]"}>
        <div className={"flex justify-center w-full content-around"}>
          <ul
            id={"carousel-list"}
            className={"flex list-none relative justify-center"}
          >
            {test.map((n, i) => {
              return (
                <li
                  data-pos={n}
                  className={
                    "carousel-list-item flex items-end justify-center w-[65vw] max-w-[1000px] aspect-[1.77/1] rounded-2xl absolute bg-zinc-950 border border-zinc-400 transition-all shadow-black shadow-md hover:border-zinc-50 hover:shadow-lg"
                  }
                  key={i}
                >
                  test{n}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdSlider;
