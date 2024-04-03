import Footer from "@/components/Footer/Footer";
import Section_1 from "@/components/Section_1/Section_1";
import Section_2 from "@/components/Section_2/Section_2";
import Section_3 from "@/components/Section_3/Section_3";
import Section_4 from "@/components/Section_4/Section_4";
import Section_5 from "@/components/Section_5/Section_5";
import Section_6 from "@/components/Section_6/Section_6";
import Nav_bottom from "@/components/bottom_nav/Nav_bottom";
import { Separator } from "@/components/ui/separator";
import React from "react";

const page = () => {
  return (
    <div>
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Nav_bottom />
      <Separator className="mt-10" />
      <Footer />
    </div>
  );
};

export default page;
