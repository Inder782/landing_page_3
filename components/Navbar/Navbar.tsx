import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between p-6">
      <div className="font-bold text-3xl">
        <Link href="/">
          break<span className="text-purple-700">io</span>
        </Link>
      </div>
      <div className="flex items-center gap-10 mr-32 font-bold max-[1200px]:hidden">
        <Link href="/" className="">
          Explore
        </Link>
        <Link href="/">Solutions</Link>
        <Link href="/">About</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Log In</Link>
        <button className=" bg-fuchsia-600 text-white p-3 rounded-lg">
          Start Now
        </button>
      </div>
      <div className="block min-[1200px]:hidden">
        <Sheet>
          <SheetTrigger>
            <Image
              src="/Navbar/hamburger_menu.svg"
              width={35}
              height={52}
              alt="hamburger"
              className="bg-purple-500 rounded-full p-2 "
            />
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col items-center justify-center gap-20 mt-32">
              <Link href="/" className="">
                Explore
              </Link>
              <Link href="/">Solutions</Link>
              <Link href="/">About</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Log In</Link>
              <button className=" bg-fuchsia-600 text-white p-3 rounded-lg">
                Start Now
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
