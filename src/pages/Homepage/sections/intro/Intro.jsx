"use client"

import { useState, useEffect } from "react"
import "./intro.css"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router-dom"

function Intro() {
  const [isHovered, setIsHovered] = useState(false)
  const [currentTab, setCurrentTab] = useState("what is ureckon")
  const tabs = ["what is ureckon", "when , where and more", "whats new this year"]

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = tabs.indexOf(currentTab)
      const nextIndex = (currentIndex + 1) % tabs.length
      setCurrentTab(tabs[nextIndex])
    }, 5000) // Switch every 5 seconds

    return () => clearTimeout(timer)
  }, [currentTab])

  const handleTabChange = (value) => {
    setCurrentTab(value)
  }

  const tabContent = {
    "what is ureckon": {
      title: "WHO ARE WE ?",
      firstPara:
        "Welcome to the dynamic realm of Ureckon, the pulsating heartbeat of innovation and creativity! As we gear up for the seventh edition in 2025, Ureckon stands tall as the annual techno-management fest of the University of Engineering and Management, Kolkata. Revealing the foundations of innovation and fostering an inclusive environment of excellence, Ureckon has come to symbolise a celebration of technological innovation and managerial skill.",
      secondPara:
        "This festival breaks down barriers by bringing together enthusiasts, professionals, and students from all walks of life for an intense program that includes workshops, competitions, and interactive sessions. Join us as we explore the seemingly endless possibilities that Ureckon 2024 has to offer as we set off on this voyage of knowledge-sharing and ground-breaking innovations. Come, be a part of the symphony of innovation that defines who we are!",
      imageSrc: "./Group.png",
    },
    "when , where and more": {
      title: "WHEN, WHERE,& MORE",
      firstPara:
        "Mark your calendars for an extraordinary experience! Ureckon 2025 is set to take place from [insert dates] at the vibrant campus of the University of Engineering and Management, Kolkata. This year, we're expanding our horizons with both physical and virtual events, ensuring global participation and accessibility.",
      secondPara:
        "Expect a fusion of cutting-edge technology showcases, thought-provoking panel discussions, hands-on workshops, and exhilarating competitions. From AI and robotics to sustainable tech and entrepreneurship, Ureckon 2025 promises a diverse range of events catering to various interests and expertise levels. Stay tuned for more details on our star-studded guest list, exciting prize pools, and networking opportunities!",
      imageSrc: "./Group.png",
    },
    "whats new this year": {
      title: "WHAT'S NEW THIS YEAR ?",
      firstPara:
        "Ureckon 2025 is set to redefine the tech fest experience with groundbreaking additions! This year, we're introducing a 'Green Tech Challenge,' focusing on sustainable innovations. Participants will have the chance to pitch their eco-friendly tech solutions to industry leaders and potential investors.",
      secondPara:
        "We're also launching 'AI for Good' hackathon, where teams will develop AI solutions addressing pressing global issues. Additionally, our new 'Tech Titans' speaker series will feature renowned tech visionaries sharing insights on future trends. Get ready for enhanced virtual reality experiences, a dedicated blockchain and cryptocurrency track, and expanded international collaborations. Ureckon 2025 is not just an event; it's a glimpse into the future of technology and management!",
      imageSrc: "./Group.png",
    },
  }

  return (
    <section className="min-h-screen px-5 mx-auto sm:p-6 md:p-10">
      <div className="flex items-center justify-center">
        <h1
          className="mx-auto font-pixel mb-[2rem] flex gap-[16px] items-center animate-bounce"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Designed By
          <img
            src={isHovered ? "./animate orange.svg" : "./animate white.svg"}
            className="h-[33.37px] w-[158px] cursor-pointer"
            alt="Designed By"
          />
        </h1>
      </div>

      <div className="container mx-auto rounded-[54.35px] sm:p-4 md:px-8 lg:p-6 introBox relative h-auto w-[90vw] border-[#3f3b4f] border">
        <Tabs defaultValue="what is ureckon" value={currentTab} onValueChange={handleTabChange}>
          <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-transparent gap-5 sm:gap-[4rem] md:gap-[3rem] lg:gap-[8rem] font-pixel absolute top-1 max-lg:w-full">
            <TabsTrigger
              className="text-xs sm:text-sm md:text-[9px] lg:text-[12px] xl:text-base tab1 relative md:right-5"
              value="what is ureckon"
            >
              WHAT IS URECKON ?
            </TabsTrigger>
            <TabsTrigger
              className="text-xs sm:text-sm md:text-[9px] lg:text-[12px] xl:text-base relative md:right-[2rem] right-0"
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
          {tabs.map((tab) => (
            <TabsContent key={tab} value={tab}>
              <TabContent
                title={tabContent[tab].title}
                firstPara={tabContent[tab].firstPara}
                secondPara={tabContent[tab].secondPara}
                imageSrc={tabContent[tab].imageSrc}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

function TabContent({ title, firstPara, secondPara, imageSrc }) {
  const links = [
    {
      id: 1,
      icon: "./socials/LinkedIn.svg",
      href: "https://www.linkedin.com/company/ureckon/posts/?feedView=all",
    },
    {
      id: 2,
      icon: "./socials/Instagram.svg",
      href: "https://www.instagram.com/ureckon.uemk/?hl=en",
    },
    {
      id: 3,
      icon: "./socials/X.svg",
      href: "https://x.com/Ureckon_Uemk",
    },
    {
      id: 4,
      icon: "./socials/WhatsApp.svg",
      href: "https://whatsapp.com/channel/0029VaBYereHFxP3CiIpRo1H",
    },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20rem] p-3 sm:p-4 md:p-5 max-lg:mt-4">
      <div className="flex justify-center md:justify-start">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className="relative lg:left-[5rem] max-lg:hidden lg:h-[467.42px] lg:top-[6rem]"
        />
      </div>
      <div className="flex flex-col gap-5 md:gap-12 relative w-full lg:right-[4rem] xl:right-4 bottom-[5rem] md:bottom-0 md:left-[6rem] lg:left-0">
        <h1 className="text-[#58EEFF] text-xl md:text-[18px] xl:text-[22px] font-pixel relative md:top-[6rem] lg:top-[4rem] md:right-[26rem] lg:right-0 md:min-w-[600px]">
          {title}
        </h1>
        <div className="flex flex-col gap-5 mx-auto md:gap-10 mt-4 md:mt-[5rem] font-pixel relative md:right-[26rem] lg:right-0">
          <p className="text-[10px] sm:text-[11px] md:text-[12px] text-[#C0C0C0] text-wrap">{firstPara}</p>
          <p className="text-[10px] sm:text-[11px] md:text-[12px] text-[#C0C0C0] text-wrap">{secondPara}</p>
          <div className="flex items-center gap-5 mx-auto mt-[2rem] md:mt-0">
            {links.map((item) => (
              <Link to={item.href} key={item.id}>
                <button
                  className="rounded-full px-2 py-1 h-[54px] w-[54px] flex items-center justify-center hover:scale-110 transition-all duration-300 drop-shadow-[0_0_4px_#000000]"
                  style={{
                    background: "linear-gradient(to bottom, #3C1E82, #371C77)",
                  }}
                >
                  <img src={item.icon || "/placeholder.svg"} className="h-[64px] w-[64px]" alt={`${item.id} icon`} />
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro

