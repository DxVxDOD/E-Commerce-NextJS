'use client'

import {useEffect} from "react";

const AdSlider = () => {

    const update = (newActive: HTMLElement, elements) => {
        const newActivePosition = newActive.dataset.pos!
        const current = elements
    }

  const test = [1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1]

  useEffect(() => {
    const carouselList = document.getElementById('carousel-list')!
    const carouselListItem = document.querySelectorAll('.carousel-list-item')!
    const elements = Array.from(carouselListItem);

    let intervalId: number;

    carouselList.addEventListener('click', (e) => {
        const newActive = e.target! as HTMLElement;
        const isItem = newActive.closest('.carousel-list-item')

        if(!isItem || newActive.classList.contains('carousel-list-item-active')) {
            return
        }

    })
  }, [])

  return (
      <nav className={'min-h-screen mb-[8rem] mt-[4rem] border-red-500 border'} >
        <div className={'w-screen mt-[12vh]'} >
          <div className={'flex justify-center w-full content-around'}>
            <ul id={'carousel-list'} className={'flex list-none relative justify-center'} >
              {test.map((n, i) => {
              return(
                  <li
                    className={'carousel-list-item flex items-end justify-center w-[65vw] max-w-[1000px] aspect-[1.77/1] rounded-2xl absolute bg-zinc-950 border border-zinc-400 transition-all shadow-black shadow-md hover:border-zinc-50 hover:shadow-lg'}
                    key={i}>test
                </li>
              )
              })}
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default AdSlider;
