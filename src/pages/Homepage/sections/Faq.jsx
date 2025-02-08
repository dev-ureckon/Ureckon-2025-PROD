import { TextAnimate } from "../../../components/ui/text-animate";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import React from "react";

function Faq() {
  return (
    <section className=" flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12">
      <div className="w-full max-w-6xl">
        <div className="text-center">
          <h1 className="font-press text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-tight sm:leading-[80px] md:leading-[90px] lg:leading-[102px] gradient-text drop-shadow-[0_0_10px_rgba(235,169,42,0.8)] mb-10">
            <TextAnimate animation="slideLeft" by="character">
              FAQ'S
            </TextAnimate>
          </h1>
        </div>
        <div className="max-w-5xl font-press mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-6">
            <AccordionItem value="item-1" className="bg-[#030418]  p-4">
              <AccordionTrigger className="text-left text-xs lg:text-xl">
                Who can participate?
              </AccordionTrigger>
              <AccordionContent className="text-left text-xs lg:text-base">
                Anyone interested in innovation, competitions, and networking can participate!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-[#030418] p-4">
              <AccordionTrigger className="text-left text-xs lg:text-xl">
                How can I register for Ureckon events?
              </AccordionTrigger>
              <AccordionContent className="text-left text-xs lg:text-base">
                You can register via our official website. Check the events page for details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-[#030418]  p-4">
              <AccordionTrigger className="text-left text-xs lg:text-xl">
                Can I attend Ureckon if I'm not participating in any events?
              </AccordionTrigger>
              <AccordionContent className="text-left text-xs lg:text-base">
                Yes! You can enjoy workshops, exhibitions, and various activities.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Faq;
