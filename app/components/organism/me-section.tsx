import { HeroContent } from "../molecule/hero-content";
import { HorizontalLine } from "../molecule/horizontal-line";
import { SmallCard } from "../molecule/small-card";
import { SmallIcon } from "../molecule/small-icon";

import me from "~/assets/images/me.png";
import { USERINFORMATION } from "~/constants/user-information";
import { SOCIALMEDIA } from "~/constants/seocial-media";

export const MeSection = () => {
  return (
    <div className={`text-white rounded-2xl bg-custom-primary h-fit space-y-6 pb-6 backdrop-brightness-50`}>
      <HeroContent focus="Web Developer" name="Kevin Adiwiguna" url={me} />

      <HorizontalLine />

      <div className="mx-4 grid space-y-2 sm:grid-cols-2 overflow-hidden lg:grid-cols-1">
        {USERINFORMATION.map((res, key) => {
          return <SmallCard key={key} title={res.title} description={res.description} icons={res.icon} />;
        })}
      </div>

      <HorizontalLine />

      <div className="w-full flex justify-center items-center gap-x-2">
        {SOCIALMEDIA.map((res, key) => {
          return <SmallIcon key={key} icons={res.icon} to={res.url} />;
        })}
      </div>
    </div>
  );
};
