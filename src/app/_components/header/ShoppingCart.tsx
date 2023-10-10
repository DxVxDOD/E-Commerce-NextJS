import Image from "next/image";
import cart from "@/public/shopping-cart-svgrepo-com.svg";

const ShoppingCart = () => {
  return (
    <button>
      <Image src={cart} alt={"Shopping Cart"} />
    </button>
  );
};

export default ShoppingCart;
