import { EDUCATION } from "~/constants/education";
import { SKILLSICONLIST } from "~/constants/skills-icon";
import { EXPERIENCE } from "./experience";

export const AboutSection = () => {
  return (
    <div className="py-6 px-4 text-white -z-20">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold md:font-bold">About Me</h1>
        <p className="text-neutral-200">A short story of me, not important but seem better than nothing.</p>
      </div>

      <div className="border-custom-secondary my-6 w-[20%] border-t-8 overflow-hidden rounded-full"></div>

      <div className="space-y-6 ">
        <div className="text-neutral-300 space-y-6">
          <p>Greetings!</p>
          <p>I'm Kevin. With over two years of experience in web development, I've honed my skills in both frontend and backend technologies. My passion lies in crafting intuitive and visually appealing frontend applications.</p>
          <p>I specialize in JavaScript and its popular frameworks, including React (Next.js, Vite), and Node.js (Express.js). I'm always eager to explore the latest advancements in the web development landscape.</p>
          <p>During my time at CloudGakkai and Full-Stack Lombok, I gained valuable experience in project management, team collaboration, and problem-solving. I've learned to adapt to challenges, work efficiently, and contribute positively to a dynamic work environment.</p>
          <p>Effective communication is essential for successful teamwork, and I strive to maintain open and honest dialogue with colleagues.</p>
          <p>I'm a quick learner, a creative thinker, and a dedicated professional. My experience has sharpened my analytical skills and leadership abilities. I thrive in collaborative teams and am excited to contribute to the success of our projects.</p>
          <p>I'm eager to collaborate and look forward to working with you!</p>
        </div>
      </div>

      <div>
        <h1 className="mb-4 text-2xl font-semibold md:font-bold mt-12">Experience</h1>
        <div>
          <ol className="border-l ml-3 border-custom-tertiary">
            {EXPERIENCE.sort((a, b) => {
              const endDateA = a.date.endDate === "Present" ? new Date().getTime() : new Date(a.date.endDate).getTime();
              const endDateB = b.date.endDate === "Present" ? new Date().getTime() : new Date(b.date.endDate).getTime();
              return endDateB - endDateA;
            }).map((experience, index) => (
              <li key={index}>
                <div className="flex-start flex items-center pt-3">
                  <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-custom-secondary"></div>
                  <p className="text-sm text-custom-tertiary">
                    {experience.date.startDate} - {experience.date.endDate} | {experience.date.duration}
                  </p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                  <h4 className="mb-1.5 text-xl font-semibold">{experience.company}</h4>
                  <p className="text-md font-medium">{experience.role}</p>
                  <p className="mb-3 text-neutral-300">{experience.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div>
        <h1 className="mb-4 text-2xl font-semibold md:font-bold mt-12">My Education</h1>
        <div>
          <ol className="border-l ml-3 border-custom-tertiary">
            {EDUCATION.sort((a, b) => {
              const endDateA = a.date.endDate === "Present" ? new Date().getTime() : new Date(a.date.endDate).getTime();
              const endDateB = b.date.endDate === "Present" ? new Date().getTime() : new Date(b.date.endDate).getTime();
              return endDateB - endDateA;
            }).map((res, key) => {
              return (
                <li key={key}>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-custom-secondary"></div>
                    <p className="text-sm text-custom-tertiary">
                      {res.date.startDate} - {res.date.endDate}
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="mb-1.5 text-xl font-semibold">{res.title}</h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">{res.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <div>
        <h1 className="mb-4 text-2xl font-semibold md:font-bold mt-12">My Skills</h1>
        <div className="flex-wrap flex ml-2 gap-x-2 sdfsdfsdsdfsdf">
          {SKILLSICONLIST.map((res, key) => {
            return (
              <div key={key} title={res.title} className="bg-custom-bg2 text-2xl p-2 rounded-lg cursor-pointer hover:scale-110 duration-300">
                {res.icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
