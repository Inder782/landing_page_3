import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { images_sec_3 } from "@/static/section_";

const Section_3 = () => {
  return (
    <div className="mt-32">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-fuchsia-600 to-violet-700 bg-clip-text text-transparent max-[400px]:text-xl">
          Stories from users
        </h1>
        <p className="p-20 font-semibold">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>
      <div className="flex items-center justify-center p-8 max-[850px]:hidden ">
        <Carousel className="">
          <CarouselContent>
            {images_sec_3.map((item) => (
              <CarouselItem className="basis-1/4 " key={item.key}>
                <div
                  className="shadow-md bg-slate-50 p-6 rounded-2xl "
                  key={item.key}
                >
                  <Image
                    src={item.product_page}
                    width={350}
                    height={52}
                    alt="profile"
                  />
                  <div className="flex items-center mt-2" key={item.key}>
                    <Image
                      src={item.profile_image}
                      width={52}
                      height={52}
                      alt="profile"
                    />
                    <div className="gap-3 mt-2 ml-2">
                      <h1 className="font-semibold">{item.text_1}</h1>
                      <h2 className="text-gray-600 ">{item.author}</h2>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className=" flex items-center justify-center min-[850px]:hidden">
        <Carousel className="w-96">
          <CarouselContent className="">
            {images_sec_3.map((item) => (
              <CarouselItem className="" key={item.key}>
                <div
                  className="flex flex-col items-center shadow-md  rounded-2xl "
                  key={item.key}
                >
                  <Image
                    src={item.product_page}
                    width={350}
                    height={52}
                    alt="profile"
                    className="mt-4"
                  />
                  <div className="flex items-center mt-2" key={item.key}>
                    <Image
                      src={item.profile_image}
                      width={52}
                      height={52}
                      alt="profile"
                    />
                    <div className="gap-3 mt-2 ml-2">
                      <h1 className="font-semibold">{item.text_1}</h1>
                      <h2 className="text-gray-600 ">{item.author}</h2>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Section_3;
