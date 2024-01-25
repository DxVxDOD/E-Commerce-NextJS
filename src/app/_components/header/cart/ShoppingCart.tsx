"use client";

import Image from "next/image";
import cart from "./shopping-cart-svgrepo-com.svg";
import cartDark from "./cart_dark.svg";
import { useAppSelector } from "@/redux/hooks";

const ShoppingCart = () => {
  const theme = useAppSelector((state) => state.themeSlice.value);

  return (
    <button>
      {theme === "dark" ? (
        <Image src={cartDark} alt={"Shopping Cart"} />
      ) : (
        <Image src={cart} alt={"Shopping Cart"} />
      )}
    </button>
  );
};

export default ShoppingCart;
