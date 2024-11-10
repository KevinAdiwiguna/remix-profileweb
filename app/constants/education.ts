interface EducationProps {
  date: {
    startDate: string;
    endDate: string;
  };
  title: string;
  description: string;
}

export const EDUCATION: EducationProps[] = [
  {
    date: {
      startDate: "2012",
      endDate: "2018",
    },
    title: "SDN 44 Ampenan",
    description: "Completed elementary education with a strong foundation in core subjects, fostering curiosity and essential learning skills.",
  },
  {
    date: {
      startDate: "2018",
      endDate: "2021",
    },
    title: "SMPN 7 Mataram",
    description: "Developed a growing interest in programming in my third year, leading me to create my first Discord bot using JavaScript and setting the stage for future tech pursuits.",
  },
  {
    date: {
      startDate: "2021",
      endDate: "2024",
    },
    title: "SMKN 2 Mataram",
    description: "Graduated from vocational high school, where I explored web development, design using Figma, and desktop application development with VB.NET, strengthening both creative and technical skills.",
  },
  {
    date: {
      startDate: "2024",
      endDate: "Present",
    },
    title: "Universitas Mataram",
    description: "Currently pursuing higher education, with a focus on expanding my technical expertise and knowledge in a chosen field of study.",
  },
];
