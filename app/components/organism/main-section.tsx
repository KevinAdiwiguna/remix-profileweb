import { FigmaIcon, WebsiteIcon, PhoneIcon, CameraIcon } from "~/assets/icons";
import { ABILITY } from "~/constants/ability";
import { HorizontalLine } from "../molecule/horizontal-line";

export const MainSection = () => {
  return (
    <div className="py-6 px-4 text-white ">
      <h1 className="text-2xl font-semibold md:font-bold">Hi, Im Kevin 👋</h1>

      <div className="space-y-4 mt-2 mb-7">
        <ul className="flex flex-col lg:flex-row gap-1 lg:gap-10 ml-5 list-disc text-neutral-400">
          <li>Based in Mataram, Indonesia</li>
          <li>Working remotely</li>
        </ul>
      </div>

      <p>Full Stack Web Developer who loves crafting polished web experiences, especially on the frontend. I use JavaScript, React.js, and Next.js to make things look great. Collaborating with teams, I enjoy creating dynamic and visually appealing web applications.</p>


      <HorizontalLine />

      <div>
        <h1 className="text-2xl font-semibold md:font-bold mt-12">What I&apos;m Doing</h1>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ABILITY.map((res, key) => {
            return (
              <div key={key} className="bg-custom-bg2 p-4 rounded-xl text-center sm:text-left text-custom-tertiary text-sm sm:flex sm:flex-nowrap sm:gap-3 sm:justify-center sm:items-start">
                <div className="text-custom-secondary text-3xl flex justify-center items-center my-2 md:text-4xl lg:text-5xl xl:text-4xl">{res.icon}</div>
                <div>
                  <h1 className="font-semibold text-xl">{res.title}</h1>
                  <p>{res.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
