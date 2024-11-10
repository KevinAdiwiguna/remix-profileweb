import { MeSection } from "~/components/organism/me-section";
import { AboutSection } from "~/components/organism/about-section";
import { NavbarDesktop } from "~/components/organism/navbar";

export default function About() {
  return (
    <div className="">
      <div className="lg:flex lg:items-start justify-center gap-x-5">
        <div className="lg:mt-10 lg:sticky lg:top-5">
          <MeSection />
        </div>
        <div className="mt-10">
          <div className="rounded-2xl w-full h-fit bg-custom-primary backdrop-brightness-50">
            <NavbarDesktop />
            <AboutSection />
          </div>
        </div>
      </div>
    </div>
  );
}
