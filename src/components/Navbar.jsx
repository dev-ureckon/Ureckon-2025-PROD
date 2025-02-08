

import { Menu, Twitter } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full   shadow-lg px-6 py-6 max-w-full ">
      <nav className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full" >
            <img src="/ureckon.svg"/>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-16 text-[#F8E461] lg:flex">
          <a href="/" className="md:text-xl text-base  hover:text-yellow-500">
            HOME
          </a>
          <a href="/about-us" className="md:text-xl text-base hover:text-yellow-500">
            ABOUT
          </a>
          <a href="/partners" className="md:text-xl text-base hover:text-yellow-500">
            PARTNERS
          </a>
        </div>

        {/* Register Button - Always Centered */}
        <a href="/events">
        <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#E98A23] px-4 py-2  font-freon text-black transition-colors hover:bg-[#FF6B00]/90 border-4 border-[#CF2228]">
          REGISTER NOW
        </button>
        </a>

        {/* Desktop Navigation Continued */}
        <div className="hidden items-center space-x-16 text-yellow-400 lg:flex">
          <a href="/events" className="md:text-xl text-base hover:text-yellow-500">
            EVENTS
          </a>
          <a href="/team" className="md:text-xl text-base hover:text-yellow-500">
            TEAM
          </a>
          <a href="/contact-us" className="md:text-xl text-base hover:text-yellow-500">
            CONTACT US
          </a>
        </div>

        {/* Social Icon */}
        <div className="flex items-center space-x-4">
        <div className="h-8 w-8 rounded-full hidden md:block" >
            <img src="/ureckon.svg"/>
          </div>
          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-yellow-400 hover:text-yellow-500 lg:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`fixed right-0 top-0 h-full w-64 transform bg-[#020B2D] p-6 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <div className="flex flex-col space-y-4 text-[#F8E461]">
            <a href="/" className="md:text-lg text-base hover:text-yellow-500" onClick={() => setIsOpen(false)}>
              HOME
            </a>
            <a href="/about-us" className="md:text-lg text-base hover:text-yellow-500" onClick={() => setIsOpen(false)}>
              ABOUT
            </a>
            <a href="/partners" className="md:text-lg text-base hover:text-yellow-500" onClick={() => setIsOpen(false)}>
              PARTNERS
            </a>
            <a href="/events" className="md:text-lg text-base hover:text-yellow-500" onClick={() => setIsOpen(false)}>
              EVENTS
            </a>
            <a href="/team" className="md:text-lg text-base hover:text-yellow-500" onClick={() => setIsOpen(false)}>
              TEAM
            </a>
            <a href="/contact-us" className="md:text-lg text-base hover:text-yellow-500" onClick={() => setIsOpen(false)}>
              CONTACT US
            </a>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsOpen(false)} />}
      </nav>
    </header>
  )
}

