import React, { useEffect, useState } from "react";
import {useInView} from "react-intersection-observer";

interface ProjectItemProps {
    title: string;
    description: string;
    tech: { img: string; alt: string; w?: string; h?: string }[];
    bgColor?: string;
    textColor?: string;
    index?: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
                                                     title,
                                                     description,
                                                     tech,
                                                     bgColor = "bg-white",
                                                     textColor = "text-black",
                                                     index = 0,
                                                 }) => {
    const [visible, setVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            const timeout = setTimeout(() => setVisible(true), index * 150); // stagger
            return () => clearTimeout(timeout);
        }
    }, [inView, index]);

    return (
        <div
            ref={ref}
            className={`flex flex-col items-center gap-5 border-b border-[#F0EBD8] pb-6 w-full sm:w-4/5 md:w-full lg:w-2/4 p-6 sm:p-9 rounded-3xl transition-transform transform hover:scale-95 cursor-pointer
        ${bgColor} ${textColor} 
        transform transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
            <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
            <p className="text-center font-semibold px-4 sm:px-6">{description}</p>
            <p className="font-semibold text-[#3E5C76] mb-2 mt-4">Technologies used:</p>
            <div className="flex flex-wrap items-center gap-4">
                {tech.map((t, i) => (
                    <img
                        key={i}
                        src={`/images/${t.img}`}
                        alt={t.alt}
                        className={`${t.w || "w-10"} ${t.h || "h-8"}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectItem;