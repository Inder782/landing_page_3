import { nav_bottom } from "@/static/nav_bottom";
import Link from "next/link";
import React from "react";

const Nav_bottom = () => {
  return (
    <div className="mt-20 grid grid-cols-6 text-center font-semibold">
      {nav_bottom.map((items) => (
        <div className="" key={items.key}>
          <Link href="/" key={items.key}>
            <span>{items.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Nav_bottom;
