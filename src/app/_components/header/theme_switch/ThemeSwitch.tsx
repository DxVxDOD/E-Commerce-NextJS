"use client";

import { useEffect } from "react";
import Image from "next/image";
import onOff from "./on-button-svgrepo-com.svg";
import onOffDark from "./on_off_switch_dark.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setTheme, toggleTheme } from "@/redux/slices/themeSlice";

const ThemeSwitch = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.themeSlice.value);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      dispatch(setTheme("dark"));
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      aria-label={"Theme switch button"}
      onClick={() => dispatch(toggleTheme())}
    >
      {theme === "dark" ? (
        <Image src={onOffDark} alt={"Theme button"} />
      ) : (
        <Image src={onOff} alt={"Theme button"} />
      )}
    </button>
  );
};

export default ThemeSwitch;
