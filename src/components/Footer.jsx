import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Events",
    url: "/events",
    links: [
      {
        name: "Coding",
        url: "/events/coding",
      },
      {
        name: "Robotics",
        url: "/events/robotics",
      },
      {
        name: "Bio-Tech",
        url: "/events/bio-tech",
      },
    ],
  },
  {
    title: "Partners",
    url: "/partners",
    links: [
      {
        name: "Coding",
        url: "/events/coding",
      },
      {
        name: "Robotics",
        url: "/events/robotics",
      },
      {
        name: "Bio-Tech",
        url: "/events/bio-tech",
      },
    ],
  },
  {
    title: "Team",
    url: "/team",
    links: [
      {
        name: "Coding",
        url: "/events/coding",
      },
      {
        name: "Robotics",
        url: "/events/robotics",
      },
      {
        name: "Bio-Tech",
        url: "/events/bio-tech",
      },
    ],
  },
];

const socials = [
  {
    url: "/facebook",
    icon: "",
  },
  {
    url: "/twitter",
    icon: "",
  },
  {
    url: "/instagram",
    icon: "",
  },
  {
    url: "/linkedin",
    icon: "",
  },
  {
    url: "/youtube",
    icon: "",
  },
];

const LinksSection = ({ title, url, links }) => {
  return (
    <div className="flex flex-col w-fit gap-[4.20394rem]">
      <Link to={url} className="font-press bg-gradient-to-b from-[#FBD60E] to-[#DD903D] bg-clip-text text-transparent uppercase text-[1.25rem] font-normal">
        {title}
      </Link>
      <ul className="flex flex-col w-full gap-[1.63rem]">
        {links.map((link) => (
          <Link key={link.name} to={link.url} className="font-helvetica text-white font-bold uppercase">
            {link.name}
          </Link>
        ))}
        <Link to={url} className="font-helvetica text-white font-bold uppercase">
          See More
        </Link>
      </ul>
    </div>
  );
};

const SocialLink = ({ url, icon }) => {
  return (
    <Link
      to={url}
      className="flex items-center justify-center w-[2.70544rem] h-[2.70544rem] rounded-full bg-[#371C77] overflow-hidden"
    >
      <img src={icon} alt="Social Icon" />
    </Link>
  );
};

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="font-press bg-gradient-to-b from-[#FBD60E] to-[#DD903D] bg-clip-text text-transparent uppercase text-[1.25rem] font-normal">
        Connect with us
      </p>
      <ul className="flex gap-[1.67rem] mt-[2.36rem]">
        {socials.map((social) => (
          <SocialLink key={social.url} url={social.url} icon={social.icon} />
        ))}
      </ul>
      <Link to={"/contact-us"} className="mt-[3.93rem] ml-12 flex text-center bg-[#030418] border-[0.688px] border-solid border-white rounded-[50rem] w-fit font-press bg-gradient-to-b from-[#FBD60E] to-[#DD903D] bg-clip-text text-transparent uppercase text-[0.85938rem] font-normal px-[0.48rem] py-[0.64rem]">
        Contact Us
      </Link>
    </div>
  );
};

const Copyright = () => {
  return (
    <p className="font-press text-white text-opacity-50 font-normal text-[0.85938rem] bg-[#b10c0c3f] flex items-center text-center justify-center w-full py-8 px-2">
      All rights reserved Ureckon 2025
    </p>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col items-center">
      <div className="flex justify-between w-full py-[3.89rem] px-[3.83rem]">
        {links.map((link) => (
          <LinksSection key={link.title} title={link.title} links={link.links} />
        ))}
        <ContactSection />
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
