"use client";

import { ReactNode, useEffect } from "react";

const Header = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const header = document.getElementById("header")!;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.style.height = "6rem";
        header.style.backdropFilter = "blur(2.5rem)";
        header.style.borderBottom = "solid rgba(123,123,131, 0.5) 0.5px";
      } else {
        header.style.height = "9rem";
        header.style.backdropFilter = "blur(0)";
        header.style.borderBottom = "none";
      }
    });
  }, []);

  return (
    <header
      id={"header"}
      className={`header h-[8rem] fixed z-10 w-full p-4 grid grid-cols-[1fr_3fr_1fr] gap-10`}
    >
      {children}
    </header>
  );
};

export default Header;
