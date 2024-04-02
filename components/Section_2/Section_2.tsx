import Image from "next/image";
import React from "react";

const Section_2 = () => {
  return (
    <div className="mt-8 text-center p-14">
      <div>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-violet-700 bg-clip-text text-transparent max-[400px]:text-xl">
          Get better everyday
        </h1>
        <p className="mt-8">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </p>
        <button className=" bg-fuchsia-600 text-white p-3 rounded-lg mt-14">
          Start Now
        </button>
      </div>
      <div className="flex justify-center mt-28 max-[400px]:hidden">
        <Image
          src={"/Section_2/image.svg"}
          width={1350}
          height={52}
          alt="image"
        />
      </div>
      <div className="flex justify-center mt-10 min-[400px]:hidden">
        <Image
          src={"/Section_2/mobile_sec_2.svg"}
          width={1350}
          height={52}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Section_2;
