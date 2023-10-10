import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className={
        "flex justify-center dark:border-black mt-[6rem] border-t border-b bg-[#38383c] p-2 gap-2"
      }
    >

        <Link href={""}>Products</Link>
        |
        <Link href={""}>Computer Builder</Link>
        |
        <Link href={""}>Tip of the Week</Link>
        |
        <Link href={""}>Promotions</Link>
        |
        <Link href={""}>Bargain Corner</Link>
        |
        <Link href={""}>Give Away</Link>
        |
        <Link href={""}>Guides</Link>
    </nav>
  );
};

export default Navbar;
