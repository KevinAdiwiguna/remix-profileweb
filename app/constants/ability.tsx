import { CameraIcon, FigmaIcon, PhoneIcon, WebsiteIcon } from "~/assets/icons";

interface AbilityProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ABILITY: AbilityProps[] = [
  {
    icon: <FigmaIcon color="#EECC69"/>,
    title: "Web Design",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    icon: <WebsiteIcon color="#EECC69"/>,
    title: "Web Development",
    description: "High-quality development of sites at the professional level.",
  },
  {
    icon: <PhoneIcon color="#EECC69"/>,
    title: "Backend Dev",
    description:
      "Professional development of applications for iOS and Android.",
  },
  {
    icon: <CameraIcon color="#EECC69"/>,
    title: "Photography",
    description: "I make high-quality photos of any category at a professional",
  },
];
