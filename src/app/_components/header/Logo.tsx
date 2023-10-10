import Image from "next/image";
import logo from "@/public/inet-logo-rgb-pos-new.svg";
import Link from "next/link";
import getBase64 from "@/utils/getLocalBase64";

const Logo = async () => {
  const myBlurDataUrl = await getBase64(
    "http://localhost:3000/inet-logo-rgb-pos-new.svg",
  )!;

  return (
    <Link href={"/"}>
      <Image
        src={logo}
        priority={true}
        blurDataURL={myBlurDataUrl}
        width={150}
        alt={"Company Logo"}
      />
    </Link>
  );
};

export default Logo;
