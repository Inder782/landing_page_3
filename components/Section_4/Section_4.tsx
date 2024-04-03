import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reviews } from "@/static/reviews";
const Section_4 = () => {
  return (
    <div className="text-center bg-purple-200">
      <div className=" mt-32">
        <h1 className=" mt-14 text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-violet-700 bg-clip-text text-transparent max-[400px]:text-xl">
          What other users say
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-32 basius">
        <Carousel className="w-1/3 shadow-2xl max-[400px]:w-60 mb-32 ">
          <CarouselContent className="  ">
            {" "}
            {reviews.map((item) => (
              <CarouselItem
                className="p-10 rounded-xl bg-slate-200"
                key={item.key}
              >
                <div
                  className="flex flex-col items-center justify-center "
                  key={item.key}
                >
                  <h1 className="font-bold text-2xl mt-8">{item.h1_tag}</h1>
                  <p className="mt-8 ">{item.p_tag}</p>
                  <Image
                    src={item.profile_image}
                    width={52}
                    height={52}
                    alt="profile"
                    className="mt-10"
                  />
                  <span className="mt-2 font-semibold">{item.name}</span>
                  <span>{item.post}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Section_4;
