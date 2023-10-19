import Image from "next/image";
import arrowLeft from "@/public/arrow-sm-left-svgrepo-com.svg";
import arrowRight from "@/public/arrow-sm-right-svgrepo-com.svg";

const Slider = () => {
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <nav className={"flex justify-center overflow-hidden"} id={"container"}>
      <button
        className={
          "z-10 flex w-full grow-0 cursor-pointer items-center justify-center rounded border border-green-500 bg-white opacity-25 transition-all hover:scale-110 hover:opacity-50"
        }
        aria-label={"previous image button"}
        data-button={"prev"}
      >
        <Image
          className={"transition-all hover:scale-[1.15]"}
          src={arrowLeft}
          alt={"Arrow Left"}
        />
      </button>
      <ul
        id={"slider"}
        className={"m-0 flex grow list-none gap-4 p-0 transition-all"}
      >
        {test.map((n, i) => {
          return (
            <li
              className={
                "slide flex aspect-video overflow-hidden rounded border-2 border-green-500 first:rounded-l-2xl last:rounded-r-2xl"
              }
              data-pos={n}
              key={i}
            >
              <Image
                src={`https://via.assets.so/img.jpg?w=500&h=500&tc=blue&bg=#cecece&t=${n}`}
                width={500}
                height={500}
                alt={"Placeholder"}
              />
            </li>
          );
        })}
      </ul>
      <button
        className={
          "z-10 flex w-full grow-0 cursor-pointer items-center justify-center rounded-sm rounded-r-md border border-green-500 bg-white opacity-25 transition-all hover:scale-110 hover:opacity-50"
        }
        aria-label={"next image button"}
        data-button={"next"}
      >
        <Image
          className={"transition-all hover:scale-[1.15]"}
          src={arrowRight}
          alt={"Arrow Right"}
        />
      </button>
    </nav>
  );
};

export default Slider;
