"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AboutProps {
  onExploreMore: () => void;
}

export default function About({ onExploreMore }: AboutProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [visibleTitle, setVisibleTitle] = useState(false);
  const [visibleText, setVisibleText] = useState(false);

  useEffect(() => {
    if (inView) {
      const titleTimeout = setTimeout(() => setVisibleTitle(true), 0); // h1 hneď
      const textTimeout = setTimeout(() => setVisibleText(true), 200); // p po 200ms
      return () => {
        clearTimeout(titleTimeout);
        clearTimeout(textTimeout);
      };
    }
  }, [inView]);

  return (
      <div
          ref={ref}
          className="flex flex-col md:flex-row items-center w-4/5 mx-auto border-b-4 border-black py-12 gap-8"
      >
        <div className="flex-1">
          <h1
              className={`leading-15 text-4xl md:text-5xl text-[#3E5C76] font-bold transform transition-all duration-700 ease-out
            ${visibleTitle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
          >
            Junior Full Stack <span className="bg-[#F0EBD8] p-2 rounded-2xl">.JS</span> developer
          </h1>
          <p
              className={`text-xl text-gray-600 mt-4 transform transition-all duration-700 ease-out
            ${visibleText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Hi, I am Martin Lapsansky a computer science graduate from the Technical University of Kosice
            with a strong interest in web application development, which I got through various academic
            courses and hands-on projects. While my primary focus has been on frontend (React.js) and
            backend (Node.js) development, I remain open to exploring other areas within the IT field.
          </p>
          <div className="flex justify-center mt-8">
            <button
                onClick={onExploreMore}
                className="flex flex-col items-center gap-2 bg-[#3E5C76] text-white px-5 py-3 rounded-lg hover:focus:3 transition-transform"
            >
              <p className="font-bold">explore more</p>
              <svg
                  className="hover:translate-y-1 transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
              src={`/images/coding.gif`}
              alt="Animated GIF"
              className="w-full h-auto"
          />
        </div>
      </div>
  );
}