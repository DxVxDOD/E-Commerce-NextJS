import { ReactNode } from "react";
import Link from "next/link";

const ProductCard = ({
  children,
  link,
}: {
  children: ReactNode;
  link: string;
}) => {
  return (
    <Link
      href={`${link}`}
      className={"border border-red-500 flex justify-center"}
    >
      {children}
    </Link>
  );
};

export default ProductCard;
