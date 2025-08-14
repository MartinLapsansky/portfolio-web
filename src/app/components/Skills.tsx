import {useInView} from "react-intersection-observer";
import {lazy, Suspense} from "react";

const SkillCard = lazy(() => import("@/app/components/Skillcard"));
const skills = [
    { name: "HTML", years: "3 years", img: "html5.png", w: "w-24", h: "h-24" },
    { name: "CSS", years: "3 years", img: "CSS3.png", w: "w-24", h: "h-24" },
    { name: "Javascript", years: "2 years", img: "javascript.png", w: "w-28", h: "h-24" },
    { name: "Typescript", years: "2 years", img: "typescript.png", w: "w-28", h: "h-24" },
    { name: "React", years: "2 years", img: "react.png", w: "w-28", h: "h-auto" },
    { name: "Node.js", years: "2 years", img: "node.png", w: "w-auto", h: "h-16" },
    { name: "PostgreSQL", years: "2 years", img: "postgresql.png", w: "w-32", h: "h-auto" },
    { name: "MongoDB", years: "2 years", img: "mongodb.png", w: "w-24", h: "h-24" },
    { name: "Next.js", years: "1 year", img: "nextjs.png", w: "w-24", h: "h-24" },
];

export default function Skills() {

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <div className="w-4/5 mx-auto my-12" ref={ref}>
            <h2 className="text-4xl font-bold text-[#3E5C76] mb-8">Skills</h2>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                {skills.map((skill,index) => (
                    <Suspense
                        key={skill.name}
                        fallback={
                            <div className="w-24 h-24 bg-gray-200 animate-pulse rounded-lg"></div>
                        }
                    >
                        {inView && (
                            <SkillCard
                                name={skill.name}
                                years={skill.years}
                                img={skill.img}
                                visible={inView}
                                index={index}
                            />
                        )}
                    </Suspense>
                ))}
            </div>
        </div>
    );
}