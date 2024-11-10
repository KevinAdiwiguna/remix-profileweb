interface ExperienceProps {
  date: {
    startDate: string;
    endDate: string;
    duration: string;
  };
  company: string;
  role: string;
  description: string;
}

export const EXPERIENCE: ExperienceProps[] = [
  {
    date: {
      startDate: "Dec 2021",
      endDate: "Mar 2022",
      duration: "4 months",
    },
    company: "FullstackLombok",
    role: "Web Developer",
    description: "Worked as a web developer specializing in WordPress, creating responsive and user-friendly websites tailored to client needs.",
  },
  {
    date: {
      startDate: "Apr 2023",
      endDate: "Apr 2023",
      duration: "1 month",
    },
    company: "Sebarin.id",
    role: "Frontend Web Developer",
    description: "Served as a frontend web developer, where I was responsible for creating elegant and customizable wedding templates, providing users with a memorable and personalized experience.",
  },
  {
    date: {
      startDate: "Oct 2022",
      endDate: "Feb 2024",
      duration: "1 year 5 months",
    },
    company: "CloudGakkai",
    role: "Frontend Web Developer",
    description: "Held the role of frontend web developer, where I contributed to the development of key components and oversaw the team's progress, ensuring projects stayed aligned with goals and deadlines.",
  },
  {
    date: {
      startDate: "Dec 2023",
      endDate: "Jul 2024",
      duration: "8 months",
    },
    company: "UnboxLabs",
    role: "Frontend Web Developer",
    description: "Worked as a frontend web developer, contributing to the design and development of the UnboxLabs website, focusing on seamless functionality, modern aesthetics, and user-friendly interfaces.",
  },
];
