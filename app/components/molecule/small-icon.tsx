import { Link } from "../atom/link";

interface SmallIconProps {
  to: string;
  icons: React.ReactNode | string;
}

export const SmallIcon = ({ to, icons }: SmallIconProps) => {
  return (
    <div className="text-lg text-custom-secondary bg-[#77777745] p-2 rounded-full">
      <Link to={to}>{icons}</Link>
    </div>
  );
};
