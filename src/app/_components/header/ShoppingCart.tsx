import Image from "next/image";
import cart from "@/public/shopping-cart-svgrepo-com.svg";

const ShoppingCart = () => {
  return (
    <>
      <Image src={cart} alt={"Shopping Cart"} />
    </>
  );
};

export default ShoppingCart;
