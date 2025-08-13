"use client";
import { useEffect, useState } from "react";

interface Props {
  onClick: () => void;
}

export default function ScrollToTopButton({ onClick }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => {
      const shouldShow = window.scrollY > window.innerHeight;
      setVisible(shouldShow);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={onClick}
      className="fixed right-5 bottom-5 bg-[#3E5C76] text-white rounded-full p-3 hover:-translate-y-2 transition-transform"
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="40">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>
  );
}
