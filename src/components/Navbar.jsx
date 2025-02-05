import React from "react";
import Logo from "../assets/svg/Pixel logo.svg";
import { NavLink } from "react-router-dom";

const NavLinksLeft = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/about-us",
    text: "About Us",
  },
  {
    to: "/partners",
    text: "Partners",
  },
];

const NavLinksRight = [
  {
    to: "/events",
    text: "Events",
  },
  {
    to: "/team",
    text: "Team",
  },
  {
    to: "/contact-us",
    text: "Contact Us",
  },
];

const NavButtons = ({ to, text }) => {
  return (
    <NavLink to={to} className="font-helvetica text-[1.5rem] font-medium">
      {text}
    </NavLink>
  );
};

const NavLogo = () => {
  return (
    <img src={Logo} alt="Pixel Logo" className="w-[4.5rem] h-[4.5rem] block" />
  );
};

const NavRegisterButton = () => {
  return (
    <button className="relative flex items-center justify-center w-[250px] h-[64px]">
      <svg xmlns="http://www.w3.org/2000/svg" width="250" height="64" viewBox="0 0 250 64" fill="none">
        <g clipPath="url(#clip0_3013_23)">
          <rect width="250" height="64" rx="15" fill="#CF2228" />
          <rect x="6" y="5" width="238" height="53" rx="13.16" fill="#E98A23" stroke="black" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_3013_23">
            <rect width="250" height="64" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center uppercase text-black font-freon text-center text-[1.5rem] font-normal bottom-[-5px]">Register</span>
    </button>
  );
};
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 text-[#F8E461] relative shadow-sm font-mono uppercase px-[2.25rem] py-[3.25rem]">
      <NavLogo />
      {NavLinksLeft.map((link, index) => (
        <NavButtons key={index} to={link.to} text={link.text} />
      ))}
      <NavRegisterButton />
      {NavLinksRight.map((link, index) => (
        <NavButtons key={index} to={link.to} text={link.text} />
      ))}
      <NavLogo />
    </nav>
  );
};

export default Navbar;
