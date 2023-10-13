"use client";

import {useEffect} from "react";
import Image from "next/image";
import arrowLeft from '@/public/arrow-sm-left-svgrepo-com.svg'
import arrowRight from '@/public/arrow-sm-right-svgrepo-com.svg'

const AdSlider = () => {

    const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    useEffect(() => {
        const slides: NodeListOf<HTMLElement> = document.querySelectorAll('.slide');
        const slidesArray = Array.from(slides);
        slidesArray[0].setAttribute('data-active', 'active')

        const sliderButtons: NodeListOf<HTMLElement> = document.querySelectorAll('[data-button]');
        sliderButtons.forEach(button => {
            button.addEventListener('click', () => {
                const offset = button.dataset.button! === 'next' ? 1 : -1;
                const slides: HTMLElement = button.closest('[data-carousel]')!.querySelector('[data-slides]')!;
                const activeSlide: HTMLElement = slides.querySelector('[data-active="active"]')!;
                const slidesChildren = Array.from(slides.children) as HTMLElement [];
                let newIndex = slidesChildren.indexOf(activeSlide) + offset;

                if(newIndex < 0) newIndex = slidesChildren.length - 1;
                if(newIndex >= slidesChildren.length) newIndex = 0;

                slidesChildren[newIndex].dataset.active = 'active';

                delete activeSlide.dataset.active
            })
        })

    },[])

  return (
    <nav aria-label={'latest news'} className={"border-red-500 border"}>
      <div className={''} data-carousel={''}>
          <button className={'slider_button left-[1rem]'} aria-label={'previous image button'} data-button={'prev'} >
              <Image src={arrowLeft} alt={'Arrow Left'}/>
          </button>
          <button className={'slider_button right-[1rem]'} aria-label={'next image button'} data-button={'next'} >
              <Image src={arrowRight} alt={'Arrow Right'}/>
          </button>
          <ul
            id={"carousel-list"}
            className={"m-0 p-0 list-none flex"}
            data-slides={''}
          >
            {test.map((n, i) => {
              return (
                <li
                  data-pos={n}
                  className={'slide flex-[0_0_50%] p-4 border border-green-500 aspect-video'}
                  key={i}
                >
                     <span className={'block w-full border border-amber-500 h-full object-cover'} >
                    test{n}
                    </span>
                </li>
              );
            })}
          </ul>
      </div>
    </nav>
  );
};

export default AdSlider;
