import React from "react";
import { useInView } from "react-intersection-observer";
import { Suspense, lazy } from "react";

const ProjectItem = lazy(() => import("./ProjectItem"));

const projects = [
  {
    title: "AI Support System for Call Operator",
    description:
        "Full-stack web application with real-time speech processing (websocket) and LLMs for automatic transcription, content analysis, and key information extraction during emergency calls.",
    tech: [
      { img: "react.png", alt: "React" },
      { img: "typescript.png", alt: "TypeScript" },
      { img: "node.png", alt: "Node.js" },
      { img: "socketio.png", alt: "Socket.io" },
      { img: "mongodb.png", alt: "MongoDB" },
      { img: "express1.png", alt: "Express.js" },
    ],
    bgColor: "bg-blue-400",
    textColor: "text-black",
  },
  {
    title: "Artificial Intelligence in the Routing Process in MANET Networks",
    description:
        "Integration of the PSO (Particle Swarm Optimization) algorithm with a network routing protocol AODV to enhance routing metric values, crucial for efficient packet delivery. Evaluated using sequential simulations in the NS3 simulator.",
    tech: [
      { img: "python1.png", alt: "Python" },
      { img: "ns3sim.png", alt: "NS3 Simulator" },
    ],
    bgColor: "bg-green-200",
    textColor: "text-green-700",
  },
  {
    title: "Web application for shelters",
    description:
        "Developed full-stack web application as part of the Live IT projects in collaboration with company Accenture and our university.",
    tech: [
      { img: "react.png", alt: "React" },
      { img: "javascript.png", alt: "JavaScript" },
      { img: "node.png", alt: "Node.js" },
    ],
    bgColor: "bg-[#A3C9E7]",
  },
  {
    title: "Portfolio for the dentist",
    description:
        "Developed a responsive website for a dental clinic, including a reservation form that allows patients to book appointments online.",
    tech: [
      { img: "react.png", alt: "React" },
      { img: "typescript.png", alt: "TypeScript" },
      { img: "node.png", alt: "Node.js" },
    ],
    bgColor: "bg-[#6F93C1]",
  },
];

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
      <div className="w-4/5 mx-auto my-12 flex flex-col items-center" ref={ref}>
        <h2 className="text-4xl font-bold text-[#3E5C76] mb-8 text-center">Projects</h2>
        <div className="flex flex-col gap-6 items-center">
          {projects.map((project, index) => (
              <Suspense
                  key={project.title}
                  fallback={<div className="w-full sm:w-4/5 h-40 bg-gray-200 animate-pulse rounded-3xl"></div>}
              >
                {inView && <ProjectItem {...project} index={index} />}
              </Suspense>
          ))}
        </div>
      </div>
  );
}