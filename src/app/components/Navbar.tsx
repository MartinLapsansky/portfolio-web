"use client";
import { useState } from "react";
import Image from "next/image";


interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  refs: {
    homeRef: React.RefObject<HTMLElement | null>;
    aboutRef: React.RefObject<HTMLElement | null>;
    skillsRef: React.RefObject<HTMLElement | null>;
    projectsRef: React.RefObject<HTMLElement | null>;
    contactRef: React.RefObject<HTMLElement | null>;
  };
}

export default function Navbar({ scrollToSection, refs }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "About", ref: refs.aboutRef },
    { label: "Skills", ref: refs.skillsRef },
    { label: "Projects", ref: refs.projectsRef },
    {label: "Contact", ref: refs.contactRef },
  ];


  return (
    <section className="bg-[#1d2d44] text-white w-full p-7 flex items-center justify-center relative">
      {/* Identity + contacts */}
      <nav className="flex flex-row items-center justify-between gap-5 w-full">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-lg">Martin Lapsansky</p>
          <div className="flex flex-col items-left text-sm gap-1">
            <div className="flex items-center gap-2">
              <Image src={`/images/envelope.png`} alt="" width={30} height={30} />
              <a href="mailto:career.lapsansky@gmail.com" className= "hover:underline">
                career.lapsansky@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/images/phone.png" alt="" width={30} height={30} />
              <a href="tel:+421904608208" className="hover:underline">
                +421&nbsp;904&nbsp;608&nbsp;208
              </a>            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {menuItems.map((item) => (
              <button
                  key={item.label}
                  className="relative text-2xl hover:font-bold after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[#F0EBD8] hover:after:w-full after:transition-all"
                  onClick={() => scrollToSection(item.ref)}
              >
                {item.label}
              </button>
          ))}
        </div>
        <button
            className="hidden md:flex bg-white text-2xl text-[#3E5C76] rounded-full px-4 py-2 font-bold hover:scale-120"
            onClick={() => window.open("/files/resume.pdf", "_blank", "noopener,noreferrer")}
        >
          Resume
        </button>

        {/* Mobile Hamburger */}
        <div className="ml-5 md:hidden">
          <button
              aria-expanded={isOpen}
              aria-controls="mobileMenu"
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center w-15 h-15 gap-[4px]"
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
        <div
            id="mobileMenu"
            className={`absolute gap-3 top-full left-0 w-full bg-[#73aff0] text-[#3E5C76] flex flex-col items-center py-4 shadow-md md:hidden
    transform transition-all duration-300 ease-out
    ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'} z-50`}
        >
          {menuItems.map((item) => (
              <button
                  key={item.label}
                  className="text-2xl py-2 cursor-pointer hover:font-bold w-50"
                  onClick={() => {
                    scrollToSection(item.ref);
                    setIsOpen(false);
                  }}
              >
                {item.label}
              </button>
          ))}
        </div>
      </nav>

    </section>
  );
}
