import React, { useState, useEffect } from "react";
import "./intro.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImLinkedin } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

function Intro() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTab, setCurrentTab] = useState("what is ureckon");
  const tabs = [
    "what is ureckon",
    "when , where and more",
    "whats new this year",
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = tabs.indexOf(currentTab);
      const nextIndex = (currentIndex + 1) % tabs.length;
      setCurrentTab(tabs[nextIndex]);
    }, 5000); // Switch every 5 seconds

    return () => clearTimeout(timer);
  }, [currentTab]);

  return (
    <section className="min-h-screen  p-4 mx-auto overflow-scroll sm:p-6 md:p-10">
      {/* <div className="flex items-center justify-center rounded-2xl w-full">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
      </TextRevealCard>
    </div> */}
      <div className="flex items-center justify-center">
        <h1
          className="mx-auto font-pixel mb-[2rem] flex gap-[16px] items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Designed By
          <img
            src={isHovered ? "./animate orange.svg" : "animate white.svg"}
            className="h-[33.37px] w-[158px]"
          />
        </h1>
      </div>

      <div className="container mx-auto rounded-[54.35px] sm:p-4 lg:p-6 introBox relative h-auto w-[90vw] border-[#3f3b4f] border">
        <Tabs defaultValue="what is ureckon" value={currentTab}>
          <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-transparent gap-5 sm:gap-[4rem] md:gap-[5rem] font-pixel absolute top-0 max-lg:w-full">
            <TabsTrigger
              className="text-xs sm:text-sm md:text-[9px] lg:text-[12px] xl:text-base tab1 relative md:right-5"
              value="what is ureckon"
            >
              WHAT IS URECKON ?
            </TabsTrigger>
            <TabsTrigger
              className="text-xs sm:text-sm md:text-[9px] lg:text-[12px] xl:text-base"
              value="when , where and more"
            >
              WHEN, WHERE,& MORE
            </TabsTrigger>
            <TabsTrigger
              className="text-xs sm:text-sm md:text-[9px] lg:text-[12px] xl:text-base items-center tab relative md:right-[3rem] lg:right-0 md:px-10"
              value="whats new this year"
            >
              WHAT'S NEW THIS YEAR ?
            </TabsTrigger>
          </TabsList>
          <TabsContent value="what is ureckon">
            <TabContent title="WHO ARE WE ?" firstPara="" secondPara="" imageSrc="./Group.png" />
          </TabsContent>
          <TabsContent value="when , where and more">
            <TabContent title="WHEN, WHERE,& MORE" imageSrc="./Group.png" />
          </TabsContent>
          <TabsContent value="whats new this year">
            <TabContent title="WHAT'S NEW THIS YEAR ?" imageSrc="./Group.png" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function TabContent({ title, imageSrc }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20rem] p-3 sm:p-4 md:p-5 max-lg:mt-4">
      <div className="flex justify-center md:justify-start">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className="relative lg:left-[5rem] max-lg:hidden h-[367.42px] lg:top-[6rem]"
        />
      </div>
      <div className="flex flex-col gap-5 md:gap-10 mx-auto relative bottom-[6rem] md:top-[1rem]">
        <h1 className="text-[#58EEFF] text-xl md:text-2xl xl:text-[28px] font-pixel md:text-left relative md:top-[6rem] lg:top-[4rem] md:right-[22rem] lg:right-0">
          {title}
        </h1>
        <div className="flex flex-col gap-5 md:gap-10 mt-4 md:mt-[5rem] font-pixel relative md:right-[22rem] lg:right-0">
          <p className="text-[10px] sm:text-[11px] md:text-[12px] text-[#C0C0C0]">
            Welcome to the dynamic realm of Ureckon, the pulsating heartbeat of
            innovation and creativity! As we gear up for the seventh edition in
            2025, Ureckon stands tall as the annual techno-management fest of
            the University of Engineering and Management, Kolkata. Revealing the
            foundations of innovation and fostering an inclusive environment of
            excellence, Ureckon has come to symbolise a celebration of
            technological innovation and managerial skill. 
          </p>
          <p className="text-[10px] sm:text-[11px] md:text-[12px] text-[#C0C0C0] flex-wrap">
            This festival breaks
            down barriers by bringing together enthusiasts, professionals, and
            students from all walks of life for an intense program that includes
            workshops, competitions, and interactive sessions. Join us as we
            explore the seemingly endless possibilities that Ureckon 2024 has to
            offer as we set off on this voyage of knowledge-sharing and
            ground-breaking innovations. Come, be a part of the symphony of
            innovation that defines who we are!
          </p>
          <div className="flex items-center gap-12 mx-auto">
            <Link
              to={
                "https://www.linkedin.com/company/ureckon/posts/?feedView=all"
              }
            >
              <button className="rounded-full bg-[#443664B8] px-4 py-3 h-[54px] w-[54px] flex items-center hover:scale-110 transition-all duration-300">
                <ImLinkedin className="h-[64px] w-[64px] text-blue-400" />
                {/* <img className="h-[64px] w-[64px]" src="./LinkedIn.svg" /> */}
              </button>
            </Link>
            <Link to={"https://www.instagram.com/ureckon.uemk/?hl=en"}>
              <button className="rounded-full bg-[#443664B8] px-4 py-3 h-[54px] w-[54px] flex items-center  hover:scale-110 transition-all duration-300">
                {/* <img className="h-[64px] w-[64px]" src="./Instagram.svg" /> */}
                <BsInstagram className="h-[64px] w-[64px] text-blue-400" />
              </button>
            </Link>
            <Link to={"https://x.com/Ureckon_Uemk"}>
              <button className="rounded-full bg-[#443664B8] px-4 py-3 h-[54px] w-[54px] flex items-center hover:scale-110 transition-all duration-300">
                {/* <img className="h-[64px] w-[64px]" src="./X.svg" /> */}
                <FaXTwitter className="h-[64px] w-[64px] text-blue-400" />
              </button>
            </Link>
            <Link to={"https://whatsapp.com/channel/0029VaBYereHFxP3CiIpRo1H"}>
              <button className="rounded-full bg-[#443664B8] px-4 py-3 h-[54px] w-[54px] flex items-center hover:scale-110 transition-all duration-300">
                <FaWhatsapp className="h-[64px] w-[64px] text-blue-400" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
