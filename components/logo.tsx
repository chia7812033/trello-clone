import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localFont({
    src: "../public/fonts/font.woff2"
})

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hidden md:flex items-center gap-x-2 m-4 hover:opacity-75 transition">
        <Image src={"/logo.svg"} alt="logo" height={30} width={30} />
        <p className={cn("text-lg pt-1", headingFont.className)}>Taskify</p>
      </div>
    </Link>
  );
};
