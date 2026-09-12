import { CircleUser } from "lucide-react";
import { Link } from "react-router-dom";
import { navIcons, navLink } from "../../data/Navigation/navbar";

const NavBar = () => {
  return (
    <div className="bg-bg-light flex flex-col sm:flex-row gap-8 sm:gap-30 justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 py-4">
      <div>
        <h3 className="text-text font-display font-bold text-h3">Bandage</h3>
      </div>
      <div className="text-mobile-menu sm:text-link sm:flex-row flex flex-col gap-8 sm:gap-32 items-center text-text-secondary font-bold">
        <ul className="flex flex-col sm:flex-row gap-3.5 items-center">
          {navLink.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-8 flex-col sm:flex-row text-primary">
          <li>
            <Link className="flex gap-2 items-center sm:flex-row">
              <CircleUser />
              <span className="whitespace-nowrap">Login / Register</span>
            </Link>
          </li>
          {navIcons.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>{item.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
