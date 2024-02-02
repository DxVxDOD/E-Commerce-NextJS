import { ReactNode } from "react";
import Link from "next/link";

const PromotionsCard = ({
  children,
  link,
}: {
  children: ReactNode;
  link: string;
}) => {
  return (
    <Link
      href={`${link}`}
      className={" border border-[#38383c] bg-[#252528] flex justify-center"}
    >
      {children}
    </Link>
  );
};

export default PromotionsCard;
