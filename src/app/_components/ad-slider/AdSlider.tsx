'use client'

import {useEffect} from "react";

const AdSlider = () => {

  const test = [1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1]

  useEffect(() => {

  }, [])

  return (
      <nav className={'min-h-screen mb-[8rem] mt-[4rem] border-red-500 border'} >
        <div className={'w-screen mt-[12vh]'} >
          <div className={'flex justify-center w-full content-around'}>
            <ul id={'carousel-list'} className={'flex list-none relative justify-center'} >
              {test.map((n, i) => {
              return(
                  <li
                      id={'carousel-list-item'}
                    className={'flex items-end justify-center w-[65vw] max-w-[1000px] aspect-[1.77/1] rounded-2xl absolute bg-zinc-950 border border-zinc-400 transition-all shadow-black shadow-md hover:border-zinc-50 hover:shadow-lg'}
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
