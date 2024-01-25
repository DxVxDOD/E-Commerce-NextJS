import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/_components/header/Header";
import MainNavbar from "@/app/_components/navbar/MainNavbar";
import Logo from "@/app/_components/header/Logo";
import SearchBar from "@/app/_components/header/SearchBar";
import PersonBusinessSwitch from "@/app/_components/header/PersonBusinessSwitch";
import ShoppingCart from "@/app/_components/header/ShoppingCart";
import Link from "next/link";
import Image from "next/image";
import signIn from "@/public/sign-in-svgrepo-com.svg";
import ThemeSwitch from "@/app/_components/header/ThemeSwitch";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <StoreProvider>
        <body
          className={
            "dark:bg-[#1C1C1E] flex flex-col dark:text-[#cccccf] w-screen h-screen box-border m-0 p-0 overflow-x-hidden transition-all gap-4"
          }
        >
          <Header>
            <Logo />
            <SearchBar />
            <div className={"flex gap-4 justify-end h-fit pt-3"}>
              <PersonBusinessSwitch />
              <ShoppingCart />
              <Link href={""}>
                <Image src={signIn} alt={"Sign In"} />
              </Link>
              <ThemeSwitch />
            </div>
          </Header>
          <MainNavbar />
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
