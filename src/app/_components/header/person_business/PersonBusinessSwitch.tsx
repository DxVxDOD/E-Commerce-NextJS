"use client";

import Image from "next/image";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import personSvg from "./svg/person-svgrepo-com (1).svg";
import personDarkSvg from "./svg/person_svg_dark.svg";
import companySvg from "./svg/company-svgrepo-com.svg";
import companyDarkSvg from "./svg/company_svg_dark.svg";

const PersonBusinessSwitch = () => {
  const [toggle, setToggle] = useState(true);
  const theme = useAppSelector((state) => state.themeSlice.value);

  return (
    <button
      onClick={() => setToggle(!toggle)}
      aria-label={
        "Button to determine shopping for business related queries or personal. Default is set to personal, click to change."
      }
    >
      {toggle ? (
        theme === "dark" ? (
          <Image src={personDarkSvg} alt={"personal"} />
        ) : (
          <Image src={personSvg} alt={"personal"} />
        )
      ) : theme === "dark" ? (
        <Image src={companyDarkSvg} alt={"business"} />
      ) : (
        <Image src={companySvg} alt={"business"} />
      )}
    </button>
  );
};

export default PersonBusinessSwitch;
