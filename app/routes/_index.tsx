import type { MetaFunction } from "@remix-run/node";
import { MeSection } from "~/components/organism/me-section";
import { MainSection } from "~/components/organism/main-section";
import { NavbarDesktop } from "~/components/organism/navbar";

export const meta: MetaFunction = () => {
  return [{ title: "Kevin Adiwiguna" }, { name: "description", content: "Portofolio kevinadiwiguna" }];
};

export default function Index() {
  return (
    <div className="">
      <div className="lg:flex lg:items-start justify-center gap-x-5">
        <div className="lg:mt-10 lg:sticky lg:top-5">
          <MeSection />
        </div>
        <div className="mt-10">
          <div className="rounded-2xl w-full h-fit bg-custom-primary backdrop-brightness-50">
            <NavbarDesktop />
            <MainSection />
          </div>
        </div>
      </div>
    </div>
  );
}
