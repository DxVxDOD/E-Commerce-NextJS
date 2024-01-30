import { ReactNode } from "react";
import Link from "next/link";

const Card = ({ children, link }: { children: ReactNode; link: string }) => {
  return (
    <Link
      href={`${link}`}
      className={
        "border border-[#38383c] bg-[#252528] flex justify-center h-20"
      }
    >
      {children}
    </Link>
  );
};

export default Card;
