import Image from "next/image";
import React from "react";

const Section_1 = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10 mt-12 ">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-fuchsia-600 to-violet-700 bg-clip-text text-transparent max-[400px]:text-3xl">
          It's time to take a break
        </h1>
        <p className="text-xl font-semibold">
          Build your meditation skills with an app that gives you all you need!
        </p>
        <div className="flex items-center justify-center gap-5">
          <input
            className="text-center border gray-500  rounded-full w-96 h-16 max-[400px]:w-40"
            placeholder="Enter your name "
          />
          <button className="bg-fuchsia-600 p-4 rounded-2xl text-white font-bold">
            Start Now
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-20 max-[1200px]:p-10">
        <Image
          src={"/Section_1/left.svg"}
          width={1200}
          height={52}
          alt="image"
          className=""
        />
      </div>
    </div>
  );
};

export default Section_1;
