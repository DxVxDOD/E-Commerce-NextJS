"use client";

import { ReactNode, useEffect, useRef } from "react";

const Header = ({ children }: { children: ReactNode }) => {
  const headerRefSpan = useRef<HTMLElement>(null);

  const changeHeader = () => {
    const headerSpan = headerRefSpan.current!;

    if (window.scrollY > 50) {
      headerSpan.style.height = "6rem";
      headerSpan.style.backdropFilter = "blur(2.5rem)";
      headerSpan.style.zIndex = "10";
      headerSpan.style.borderBottom = "solid rgba(123,123,131, 0.5) 0.5px";
    } else {
      headerSpan.style.height = "9rem";
      headerSpan.style.backdropFilter = "blur(0)";
      headerSpan.style.borderBottom = "none";
      headerSpan.style.zIndex = "-10";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => changeHeader());

    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  }, []);

  return (
    <>
      <header className=" fixed w-full p-4 h-fit grid z-20 grid-cols-[1fr_3fr_1fr] gap-10">
        {children}
      </header>
      <span
        id={"header"}
        ref={headerRefSpan}
        className={`header -z-10 h-[8rem] transition-all fixed w-full`}
      ></span>
    </>
  );
};

export default Header;
