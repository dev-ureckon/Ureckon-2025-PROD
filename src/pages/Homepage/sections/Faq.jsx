import { TextAnimate } from "@/components/ui/text-animate";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

function Faq() {
  return (
    <section className="min-h-screen">
      <div className="px-4 py-8 md:px-8 lg:px-16 max-lg:p-10 mt-[4rem]">
        <div className="mx-auto text-center">
          <h1
            style={{
              background: "linear-gradient(to bottom, #FFB74D, #F57C00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            className="max-lg:text-4xl text-[52.05px] uppercase font-pixel drop-shadow-[0_0_10px_rgba(234,179,8,0.8)] mb-[5rem]"
          >
            <TextAnimate animation="slideLeft" by="character">
              FAQ'S
            </TextAnimate>
          </h1>
          <div className="max-w-5xl mx-auto mt-[1rem] font-pixel">
            <Accordion type="single" collapsible className="w-full space-y-6">
              <AccordionItem value="item-1" className="bg-[#030418]" >
                <AccordionTrigger>Who can participate?</AccordionTrigger>
                <AccordionContent className="text-left">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-[#030418]">
                <AccordionTrigger>
                  How can I register for Ureckon events??
                </AccordionTrigger>
                <AccordionContent className="text-left">
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-[#030418]">
                <AccordionTrigger className="text-left">
                  Can I attend Ureckon if I'm not participating in any events??
                </AccordionTrigger>
                <AccordionContent className="text-left">
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
