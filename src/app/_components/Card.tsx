import { ReactNode } from "react";

const Card = ({children}: {children: ReactNode}) => {
  return <div className={"h-36 w-36"}>
    {children}
  </div>;
};

export default Card;
