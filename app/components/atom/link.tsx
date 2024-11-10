import { Link as Links } from "@remix-run/react";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const Link = ({ to, children, className }: LinkProps) => {
  return <Links className={className} to={to}>{children}</Links>;
};
