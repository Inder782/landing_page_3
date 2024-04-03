import { nav_bottom } from "@/static/nav_bottom";
import Link from "next/link";
import React from "react";

const Nav_bottom = () => {
  return (
    <div className="mt-20 grid grid-cols-6 text-center max-[800px]:flex max-[800px]:flex-col">
      {nav_bottom.map((items) => (
        <div
          className="flex flex-col max-[800px]:gap-2 max-[800px]:mt-8"
          key={items.key}
        >
          <Link href="/" key={items.key} className="font-semibold">
            <span>{items.title}</span>
          </Link>
          <div className="flex flex-col gap-6 mt-12 text-gray-500">
            <Link href="/">{items.Link1}</Link>
            <Link href="/">{items.Link2}</Link>
            <Link href="/">{items.Link3}</Link>
            <Link href="/">{items.Link4}</Link>
            <Link href="/">{items.Link5}</Link>
            <Link href="/">{items.Link6}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Nav_bottom;
