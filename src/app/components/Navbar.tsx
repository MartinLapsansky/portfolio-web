"use client";
import { useState } from "react";

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  refs: {
    homeRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
    skillsRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    recommendationsRef: React.RefObject<HTMLElement>;
  };
}

export default function Navbar({ scrollToSection, refs }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "About Me", ref: refs.aboutRef },
    { label: "Skills", ref: refs.skillsRef },
    { label: "Projects", ref: refs.projectsRef },
    { label: "Recommendations", ref: refs.recommendationsRef },
  ];

  return (
    <nav className="bg-[#3E5C76] text-white w-full p-4 flex items-center justify-between relative">
      {/* Identity + contacts */}
      <div>
        <p className="font-bold text-lg">Martin Lapsansky</p>
        <div className="flex items-center text-sm gap-4">
          <div className="flex items-center gap-2">
            <img src="/html_finalprojimages/envelope.png" alt="" className="w-5 h-5" />
            career.lapsansky@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <img src="/html_finalprojimages/phone.png" alt="" className="w-5 h-5" />
            +13456764598
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="relative text-lg hover:font-bold after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[#F0EBD8] hover:after:w-full after:transition-all"
            onClick={() => scrollToSection(item.ref)}
          >
            {item.label}
          </button>
        ))}
        <button
          className="bg-white text-[#3E5C76] rounded-full px-4 py-2 font-bold hover:scale-105"
          onClick={() => window.open("/resume.pdf", "_blank", "noopener,noreferrer")}
        >
          Resume
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          aria-expanded={isOpen}
          aria-controls="mobileMenu"
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-center w-10 h-10 gap-[4px]"
          title="Toggle menu"
        >
          <span className={
            "w-7 h-[3px] bg-white transition-transform " + (isOpen ? "rotate-45 translate-y-[6px]" : "")
          }/>
          <span className={"w-7 h-[3px] bg-white transition-opacity " + (isOpen ? "opacity-0" : "")}/>
          <span className={
            "w-7 h-[3px] bg-white transition-transform " + (isOpen ? "-rotate-45 -translate-y-[6px]" : "")
          }/>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobileMenu"
          className="absolute top-full left-0 w-full bg-white text-[#3E5C76] flex flex-col items-center py-4 shadow-md md:hidden"
        >
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="text-2xl py-2"
              onClick={() => {
                scrollToSection(item.ref);
                setIsOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
