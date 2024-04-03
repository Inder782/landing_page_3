import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/static/faq";

const Section_6 = () => {
  return (
    <div className="mt-40 bg-slate-100">
      <div className="flex flex-col  items-center justify-center ">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-violet-700 bg-clip-text text-transparent max-[400px]:text-xl mt-20 ">
          Frequently asked questions
        </h1>
        <span className="mt-20 font-semibold w-2/3 text-center">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </span>
      </div>
      <div className="flex flex-col items-center mt-32 gap-10 ">
        {faq.map((item) => (
          <Accordion
            type="single"
            collapsible
            className="w-2/3  bg-white shadow-lg rounded-sm p-2"
            key={item.key}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Section_6;
