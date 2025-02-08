import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-us" },
    { name: "Partners", link: "/partners" },
    { name: "Events", link: "/events" },
    { name: "Team", link: "/team" },
    { name: "Contact Us", link: "/contact-us" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg px-6 py-6 max-w-full before:absolute before:inset-0 before:w-full before:h-full before:bg-black before:bg-opacity-30 before:backdrop-blur-md before:-z-10">
      <nav className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full">
            <img src="/ureckon.svg" alt="Logo" />
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-16 text-[#F8E461] lg:flex">
          {navLinks.slice(0, 3).map(({ name, link }) => (
            <a key={name} href={link} className="md:text-xl text-base font-press hover:text-yellow-500">
              {name.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Register Button - Always Centered */}
        <a href="/events">
          <button className="rounded-xl bg-[#E98A23] px-4 py-2 font-freon text-black text-sm md:text-base transition-colors hover:bg-[#FF6B00]/90 border-4 border-[#CF2228]">
            REGISTER NOW
          </button>
        </a>

        {/* Desktop Navigation Continued */}
        <div className="hidden items-center space-x-16 text-[#F8E461] lg:flex">
          {navLinks.slice(3).map(({ name, link }) => (
            <a key={name} href={link} className="md:text-xl text-base font-press hover:text-yellow-500">
              {name.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Social Icon */}
        <div className="flex items-center space-x-4">
          <div className="h-8 w-8 rounded-full hidden md:block">
            <img src="/ureckon.svg" alt="Logo" />
          </div>
          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(true)} className="text-yellow-400 hover:text-yellow-500 lg:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`fixed right-0 top-0 h-full w-64 transform bg-[#0d0f16] z-20 p-6 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden shadow-lg`}>          
          {/* Close Button */}
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-500">
            <X className="h-6 w-6" />
          </button>
          
          <div className="flex flex-col space-y-6 text-[#F8E461] mt-8">
            {navLinks.map(({ name, link }) => (
              <a key={name} href={link} className="md:text-lg text-base font-press hover:text-yellow-500" onClick={() => setIsOpen(false)}>
                {name.toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Overlay */}
        {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsOpen(false)} />}
      </nav>
    </header>
  );
}
