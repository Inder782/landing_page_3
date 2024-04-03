import Image from "next/image";
import React from "react";
import { tools } from "@/static/tools";

const Section_5 = () => {
  return (
    <div className="flex flex-col  items-center mt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-fuchsia-600 to-violet-700 bg-clip-text text-transparent max-[400px]:text-xl">
          Your favourite tools
        </h1>
        <span className="text-center p-20 w-2/3">
          In risus nec molestie at in pulvinar tellus. At integer id condimentum
          gravida nisi nisl. Sem vitae porttitor arcu congue sem erat et sit
          faucibus. Sollicitudin elit gravida tellus mattis porttitor.
        </span>
      </div>
      <div className=" grid grid-cols-3 gap-20 max-[1100px]:flex max-[1100px]:flex-col ">
        {tools.map((item) => (
          <div
            className="max-[1100px]:flex max-[1100px]:flex-col max-[1100px]:items-center "
            key={item.key}
          >
            <Image
              src={item.image}
              width={52}
              height={52}
              alt="sec_5"
              className="mt-10"
            />
            <h1 className="font-bold mt-4">{item.heading}</h1>
            <p className="w-96 mt-4 max-[1100px]:text-center max-[1100px]:p-10">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section_5;
