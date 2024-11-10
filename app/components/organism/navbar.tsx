import { Link } from "../atom/link";
import { useLocation } from "react-router-dom";

export const NavbarDesktop = () => {
  const location = useLocation();

  return (
    <>
      <div className="bg-custom-bg2 absolute right-0 rounded-bl-3xl rounded-tr-3xl py-4 space-x-4 px-6">
        <Link to="/" className={`${location.pathname === "/" ? "text-yellow-500" : "text-neutral-300"} cursor-pointer`}>
          Home
        </Link>
        <Link to="/about" className={`${location.pathname === "/about" ? "text-yellow-500" : "text-neutral-300"} cursor-pointer`}>
          About
        </Link>
      </div>
    </>
  );
};
