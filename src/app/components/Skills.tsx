import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const skills = [
  { name: "HTML", years: "3 years", img: "html5.png", w: "w-24", h: "h-24" },
  { name: "CSS", years: "3 years", img: "CSS3.png", w: "w-24", h: "h-24" },
  { name: "Java", years: "1 year", img: "java.png", w: "w-[60px]", h: "h-[60px]" },
  { name: "Node.js", years: "2 years", img: "node.png", w: "w-auto", h: "h-[60px]" },
  { name: "PostgreSQL", years: "2 years", img: "postgresql.png", w: "w-[140px]", h: "h-auto" },
  { name: "MongoDB", years: "2 years", img: "mongodb.png", w: "w-24", h: "h-24" },
  { name: "React", years: "2 years", img: "react.png", w: "w-[120px]", h: "h-auto" },
  { name: "Next.js", years: "1 year", img: "nextjs.png", w: "w-24", h: "h-24" },
];

export default function Skills() {
  return (
    <div className="w-4/5 mx-auto my-12">
      <h2 className="text-4xl font-bold text-[#3E5C76] mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center text-gray-600 border-2 border-gray-300 p-8 rounded-lg hover:scale-110 transition-transform cursor-pointer"
          >
            <img
              src={`${publicRuntimeConfig.basePath}/images/${skill.img}`}
              alt={skill.name}
              className={["object-contain", skill.w, skill.h].join(" ")}
            />
            <h6 className="mt-4 font-semibold">{skill.name}</h6>
            <p className="text-gray-600">{skill.years} experience</p>
          </div>
        ))}
      </div>
    </div>
  );
}
