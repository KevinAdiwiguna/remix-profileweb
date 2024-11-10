import { InstagramIcon, TwitterIcon } from "~/assets/icons";

interface SocialMediaProps {
  url: string;
  icon: React.ReactNode;
}

export const SOCIALMEDIA: SocialMediaProps[] = [
    {
        icon: <TwitterIcon />,
        url: "https://twitter.com/kepinkun112"
    },
    {
        icon: <InstagramIcon />,
        url: "https://instagram.com/kevinadiwiguna"
    }
];
