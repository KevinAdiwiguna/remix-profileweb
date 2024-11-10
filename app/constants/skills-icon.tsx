import {
  AdonisIcon,
  CssIcon,
  ExpressIcon,
  FigmaIcon,
  GoLangIcon,
  HtmlIcon,
  JavascriptIcon,
  NextIcon,
  PostgresIcon,
  PostmanIcon,
  QwikIcon,
  ReactIcon,
  RemixIcon,
  TailwindCss,
  TypescriptIcon,
} from "~/assets/icons";

interface SkillsIconListProps {
  title: string;
  icon: React.ReactNode;
}

export const SKILLSICONLIST: SkillsIconListProps[] = [
  {
    title: "AdonisJS",
    icon: <AdonisIcon />,
  },
  {
    title: "Figma",
    icon: <FigmaIcon />,
  },
  {
    title: "CSS",
    icon: <CssIcon />,
  },
  {
    title: "Express",
    icon: <ExpressIcon />,
  },
  {
    title: "GoLang",
    icon: <GoLangIcon />,
  },
  {
    title: "HTML",
    icon: <HtmlIcon />,
  },
  {
    title: "JavaScript",
    icon: <JavascriptIcon />,
  },
  {
    title: "Next.js",
    icon: <NextIcon />,
  },
  {
    title: "PostgreSQL",
    icon: <PostgresIcon />,
  },
  {
    title: "Postman",
    icon: <PostmanIcon />,
  },
  {
    title: "Qwik",
    icon: <QwikIcon />,
  },
  {
    title: "React",
    icon: <ReactIcon />,
  },
  {
    title: "Remix",
    icon: <RemixIcon />,
  },
  {
    title: "Tailwind CSS",
    icon: <TailwindCss />,
  },
  {
    title: "TypeScript",
    icon: <TypescriptIcon />,
  },
];
