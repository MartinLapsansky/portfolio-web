"use client";
import {useRef} from "react";
import Navbar from "@/app/components/Navbar";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import SubFooter from "@/app/components/subFooter";


export default function Home() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef= useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const subFooter = useRef<HTMLElement | null>(null);



  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current){
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
      <div className="font-sans bg-white">
        <Navbar
            scrollToSection={scrollToSection}
            refs={{ homeRef, aboutRef, skillsRef, projectsRef, contactRef}}
        />

        <div ref={homeRef} />

        <main className="flex flex-col items-center">
          <section ref={aboutRef} className="w-full">
            <About onExploreMore={() => scrollToSection(skillsRef)} />
          </section>

          <section ref={skillsRef} className="w-full">
            <Skills />
          </section>

          <section ref={projectsRef} className="w-full">
            <Projects />
          </section>

            <section ref={contactRef} className="w-full mb-10">
                <Contact/>
            </section>
            <section ref={footerRef} className="w-full">
                <Footer/>
            </section>
            <section ref={subFooter} className="w-full">
                <SubFooter/>
            </section>

        </main>

        <ScrollToTopButton onClick={() => scrollToSection(homeRef)} />
      </div>
  );
}
