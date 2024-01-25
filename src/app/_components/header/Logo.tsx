import Image from "next/image";
import logo from "@/public/inet-logo-rgb-pos-new.svg";
import darkLogo from "@/public/inet-logo-dark.svg";
import Link from "next/link";

const Logo = async () => {
  return (
    <Link href={"/"}>
      <Image
        className=""
        src={logo}
        priority={true}
        width={150}
        alt={"Company Logo"}
      />
    </Link>
  );
};

export default Logo;
