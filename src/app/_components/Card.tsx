import { ReactNode } from "react";
import Link from "next/link";

const Card = ({ children, link, categories }: { children: ReactNode; link: string, categories: boolean }) => {

  if (categories) {
    return  (
        <Link href={`${link}`} className={"border border-red-500 flex justify-center"}>
          {children}
        </Link>
    )
  }

  return (
   <>
     {children}
   </>
  );
};

export default Card;
