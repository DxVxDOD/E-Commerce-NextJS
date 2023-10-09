import Image from "next/image";
import logo from '@/public/inet-logo-rgb-pos-new.svg'
import Link from "next/link";
import getBase64 from "@/utils/getLocalBase64";
import SearchBar from "@/app/_components/header/SearchBar";
import ThemeSwitch from "@/app/_components/header/ThemeSwitch";
import PersonBusinessSwitch from "@/app/_components/header/PersonBusinessSwitch";
import signIn from '@/public/sign-in-svgrepo-com.svg'
import ShoppingCart from "@/app/_components/header/ShoppingCart";
const Header = async () => {
    const myBlurDataUrl = await getBase64('http://localhost:3000/inet-logo-rgb-pos-new.svg');

    return (
        <header className={`border-b fixed z-10 w-full border-[#7b7b83] p-4 grid grid-cols-[1fr_3fr_1fr] gap-10`} >
          <Link href={'/'}>
              <Image src={logo} priority={true} blurDataURL={myBlurDataUrl} width={150} alt={'Company Logo'}/>
          </Link>
            <SearchBar/>
            <div className={'flex gap-4 justify-end items-center'} >
                <PersonBusinessSwitch/>
                <ShoppingCart/>
                <Link href={''}>
                    <Image src={signIn} alt={'Sign In'}/>
                </Link>
                <ThemeSwitch/>
            </div>
        </header>
    )
}

export default Header