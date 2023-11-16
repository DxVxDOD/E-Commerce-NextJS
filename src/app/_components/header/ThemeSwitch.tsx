"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import onOff from "@/public/on-button-svgrepo-com.svg";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<null | string>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return setTheme("dark");
    }
  }, []);

  if (theme === "dark") {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark");
  }

  const handleThemeSwitch = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button aria-label={"Theme switch button"} onClick={handleThemeSwitch}>
      <Image src={onOff} alt={"Theme button"} />
    </button>
  );
};

export default ThemeSwitch;
