"use client";

import { useEffect } from "react";

const ProgressIndicator = () => {
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const calculateProgressBar = (progressBar: HTMLElement) => {
    progressBar.innerHTML = "";

    const row = progressBar.closest("#slider-row")! as HTMLElement;
    const slider: HTMLElement = row.querySelector("#slider")!;
    const itemCount = slider.children.length;

    const itemsPerScreen = parseInt(
      getComputedStyle(slider).getPropertyValue("--items-per-screen"),
    );
    let sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("slider-index"),
    );
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

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

  const onButtonClick = (handle: HTMLElement) => {
    const progressBar: HTMLElement = handle
      .closest("#slider-row")!
      .querySelector("#progress-bar")!;
    const slider: HTMLElement = handle
      .closest("#container")!
      .querySelector("#slider")!;
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index"),
    );
    const progressBarItemCount = progressBar.children.length;

    if (handle.dataset.button === "prev") {
      progressBar.children[sliderIndex].classList.remove("active");
      if (sliderIndex - 1 < 0) {
        slider.style.setProperty(
          "--slider-index",
          `${progressBarItemCount - 1}`,
        );
        progressBar.children[progressBarItemCount - 1].classList.add("active");
      } else {
        slider.style.setProperty("--slider-index", `${sliderIndex - 1}`);
        progressBar.children[sliderIndex - 1].classList.add("active");
      }
    }
    if (handle.dataset.button === "next") {
      progressBar.children[sliderIndex].classList.remove("active");
      if (sliderIndex + 1 > progressBarItemCount) {
        slider.style.setProperty("--slider-index", `${0}`);
        progressBar.children[0].classList.add("active");
      } else {
        slider.style.setProperty("--slider-index", `${sliderIndex + 1}`);
        progressBar.children[sliderIndex + 1].classList.add("active");
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      let handle: HTMLElement;
      const target = e.target! as HTMLElement;
      if (target.matches("[data-button]")) {
        handle = target;
      } else {
        handle = target.closest("[data-button]")!;
      }
      if (handle !== null) onButtonClick(handle);
    });

    const progressItems = document.querySelectorAll(".progress-item")!;
    progressItems[0].classList.add("active");

  }, []);

  return (
    <div id={"slider-row"}>
      <div
        id={"slider-header"}
        className={"flex justify-between p-4 items-center"}
      >
        <h3 id={"title"} className={"m-0"}>
          Title
        </h3>
      </div>
      <div id={"progress-bar"} className={"flex gap-4"}>
        {test.map((n) => {
          return (
            <div className={"progress-item"} key={n}>
              {test[n]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressIndicator;
