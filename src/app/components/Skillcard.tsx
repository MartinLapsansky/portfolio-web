import React, { useEffect, useState } from "react";

interface SkillCardProps {
    name: string;
    years: string;
    img: string;
    visible?: boolean;
    index?: number;
}


const SkillCard: React.FC<SkillCardProps> = ({ name, years, img, index = 0 }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), index * 100);
        return () => clearTimeout(timeout);
    }, [index]);

    return (
        <div
            className={`flex flex-col items-center text-gray-600 border-2 border-gray-300 p-3 sm:p-8 rounded-lg
                  hover:scale-105 hover:bg-blue-100 cursor-pointer
                  transform transition-all duration-1500 ease-out
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
            <img
                src={`/images/${img}`}
                alt={name}
                className="object-contain w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28"
            />
            <h6 className="mt-2 sm:mt-4 font-semibold text-sm sm:text-base">{name}</h6>
            <p className="text-center text-gray-600 text-xs sm:text-sm">{years} experience</p>
        </div>
    );
};

export default SkillCard;