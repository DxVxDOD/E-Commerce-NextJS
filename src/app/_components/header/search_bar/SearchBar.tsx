"use client";

import searchDark from "./search_logo_dark.svg";
import search from "./search-svgrepo-com.svg";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";

const SearchBar = () => {
  const theme = useAppSelector((state) => state.themeSlice.value);

  return (
    <div
      className={
        "dark:bg-[#1C1C1E] flex border-2 gap-2 dark:border-r-[#D10000] dark:border-l-[#D10000] h-12 rounded-2xl p-1 pl-4 dark:border-[#38383c] w-full"
      }
    >
      <button aria-label="search button">
        {theme === "dark" ? (
          <Image
            src={searchDark}
            width={25}
            height={25}
            alt={"search bar logo"}
          />
        ) : (
          <Image src={search} width={25} height={25} alt={"search bar logo"} />
        )}
      </button>
      <input
        className={"dark:bg-[#1C1C1E] rounded-xl w-full "}
        placeholder={"Search bar"}
        type={"text"}
      />
    </div>
  );
};

export default SearchBar;
