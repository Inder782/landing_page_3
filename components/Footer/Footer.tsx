import React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import Link from "next/link";
import { socials } from "@/static/socials";

const Footer = () => {
  return (
    <div className="flex justify-between items-center p-6 max-[800px]:flex max-[800px]:flex-col">
      <div className="flex items-center p-8 gap-8">
        <h1 className="font-bold text-2xl">
          break <span className="text-purple-500 text-xl">io</span>
        </h1>
        <span>@2023 - All rights reserved</span>
      </div>
      <div className="flex items-end justify-end gap-5">
        {socials.map((item) => (
          <Link href="/" key={item.key}>
            <Image src={item.icon} width={35} height={52} alt="social" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
