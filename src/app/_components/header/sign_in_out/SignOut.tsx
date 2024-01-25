"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import signOut from "./sign_in.svg";
import signOutDark from "./sign_in_dark.svg";
import { useAppSelector } from "@/redux/hooks";

export default function SignOut() {
  const theme = useAppSelector((state) => state.themeSlice.value);

  return (
    <Link href={""}>
      {theme === "dark" ? (
        <Image src={signOutDark} alt={"Sign In"} />
      ) : (
        <Image src={signOut} alt={"Sign In"} />
      )}
    </Link>
  );
}
