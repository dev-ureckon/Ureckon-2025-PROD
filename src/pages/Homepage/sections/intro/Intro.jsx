import React from "react";
import "./intro.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImLinkedin } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

function Intro() {
  return (
    <section className="h-screen p-4 sm:p-6 md:p-10">
      <div className="container mx-auto rounded-2xl p-3 sm:p-4 md:p-10 lg:p-20 introBox">
        <Tabs defaultValue="what is ureckon">
          <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-transparent gap-2 sm:gap-3 md:gap-5 font-pixel">
            <TabsTrigger className="text-xs sm:text-sm md:text-base" value="what is ureckon">
              WHAT IS URECKON ?
            </TabsTrigger>
            <TabsTrigger className="text-xs sm:text-sm md:text-base" value="when , where and more">
              WHEN, WHERE,& MORE
            </TabsTrigger>
            <TabsTrigger className="text-xs sm:text-sm md:text-base" value="whats new this year">
              WHAT'S NEW THIS YEAR ?
            </TabsTrigger>
          </TabsList>
          <TabsContent value="what is ureckon">
            <TabContent
              title="WHO ARE WE?"
              imageSrc="./Group.png"
            />
          </TabsContent>
          <TabsContent value="when , where and more">
            <TabContent
              title="WHEN, WHERE,& MORE"
              imageSrc="./Group.png"
            />
          </TabsContent>
          <TabsContent value="whats new this year">
            <TabContent
              title="WHAT'S NEW THIS YEAR ?"
              imageSrc="./Group.png"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function TabContent({ title, imageSrc }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[6rem] p-3 sm:p-4 md:p-5 max-lg:mt-4">
      <div className="flex justify-center md:justify-start">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className="relative lg:left-[5rem] max-lg:hidden h-[367.42px] lg:top-[6rem]"
        />
      </div>
      <div className="flex flex-col gap-5 md:gap-10">
        <h1 className="text-[#58EEFF] text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-pixel text-center md:text-left md:relative md:top-[2rem] lg:top-[4rem] md:right-[1rem]">
          {title}
        </h1>
        <div className="flex flex-col gap-5 md:gap-10 mt-4 md:mt-[5rem] font-pixel relative">
          <p className="text-[10px] sm:text-[11px] md:text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam tincidunt eget enim nec fermentum. Nunc vitae
            ultricies lacus, vehicula tempor dui. In hac habitasse
            platea dictumst Proin in turpis vel velit accumsan vehicula.
            Ut eleifend mi mi, a tempor ante sollicitudin vitae.
            Maecenas ac egestas ex. Duis augue erat, convallis vel
            dignissim quis,
          </p>
          <p className="text-[10px] sm:text-[11px] md:text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam tincidunt eget enim nec fermentum. Nunc vitae
            ultricies lacus, vehicula tempor dui. In hac habitasse
            platea dictumst Proin in turpis vel velit accumsan vehicula.
            Ut eleifend mi mi, a tempor ante sollicitudin vitae.
            Maecenas ac egestas ex. Duis augue erat, convallis vel
            dignissim quis,
          </p>
          <div className="flex items-center gap-12 mx-auto">
            <Link to={'https://www.linkedin.com/company/ureckon/posts/?feedView=all'}><button className="rounded-full bg-[#443664B8] px-4 py-3 h-[54px] w-[54px]"><ImLinkedin className="h-5 w-5" /></button></Link>
            <Link to={'https://www.instagram.com/ureckon.uemk/?hl=en'}><button className="rounded-full bg-[#443664B8] px-4 py-3 h-[54px] w-[54px]"><BsInstagram  className="h-5 w-5"/></button></Link>
            <Link to={'https://x.com/Ureckon_Uemk'}><button className="rounded-full bg-[#443664B8] px-4 py-3 h-[54px] w-[54px]"><FaXTwitter className="h-5 w-5" /></button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;

