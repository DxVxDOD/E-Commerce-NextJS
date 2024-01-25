"use client";

import Image from "next/image";
import logo from "./inet-logo-rgb-pos-new.svg";
import darkLogo from "./inet-logo-dark.svg";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";

const Logo = () => {
  const theme = useAppSelector((state) => state.themeSlice.value);

  return (
    <Link href={"/"} className="w-fit h-fit">
      {theme === "dark" ? (
        <Image
          src={darkLogo}
          priority={true}
          width={150}
          alt={"Company Logo"}
        />
      ) : (
        <Image src={logo} priority={true} width={150} alt={"Company Logo"} />
      )}
    </Link>
  );
};

export default Logo;
