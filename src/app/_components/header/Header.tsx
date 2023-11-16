"use client";

import { ReactNode, useEffect, useRef } from "react";

const Header = ({ children }: { children: ReactNode }) => {

  const headerRef = useRef<HTMLElement>(null)

  const changeHeader = () => {
    const header = headerRef.current!

    if (window.scrollY > 50) {
      header.style.height = "6rem";
      header.style.backdropFilter = "blur(2.5rem)";
      header.style.borderBottom = "solid rgba(123,123,131, 0.5) 0.5px";
    } else {
      header.style.height = "9rem";
      header.style.backdropFilter = "blur(0)";
      header.style.borderBottom = "none";
    }
  }

  useEffect(() => {

    window.addEventListener("scroll", () => changeHeader());

    return () => window.removeEventListener('scroll', changeHeader)
  }, []);

  return (
    <header
      id={"header"}
      ref={headerRef}
      className={`header h-[8rem] fixed z-10 w-full p-4 grid grid-cols-[1fr_3fr_1fr] gap-10`}
    >
      {children}
    </header>
  );
};

export default Header;
