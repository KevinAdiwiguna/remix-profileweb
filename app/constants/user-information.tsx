import { CalendarIcon, LocationIcon, MailIcon } from "~/assets/icons";

interface UserInformationProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const USERINFORMATION: UserInformationProps[] = [
  {
    title: "Email",
    description: "adiwigunaekvin@gmail.com",
    icon: <MailIcon color="#EECC69" />,
  },
  {
    title: "Phone",
    description: "+62 85253711498",
    icon: <MailIcon color="#EECC69" />,
  },
  {
    title: "Birthday",
    description: "May 23, 2006",
    icon: <CalendarIcon color="#EECC69" />,
  },
  {
    title: "Location",
    description: "Mataram, Indonesia",
    icon: <LocationIcon color="#EECC69" />,
  },
];
