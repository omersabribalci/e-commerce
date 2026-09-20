import { CircleUser } from "lucide-react";
import { Link } from "react-router-dom";
import { navIcons, navLink } from "../../data/Navigation/navbar";
import Container from "../ui/Container";

const NavBar = () => {
  return (
    <div className="bg-bg-light">
      <Container
        as="nav"
        aria-label="Primary navigation"
        className="flex flex-col xl:flex-row gap-8 xl:gap-30 justify-between items-center py-4"
      >
        <Link
          to="/"
          className="text-text font-display font-bold text-h3"
          aria-label="Bandage home"
        >
          Bandage
        </Link>
        <div className="text-mobile-menu xl:text-link xl:flex-row flex flex-col gap-8 xl:gap-32 items-center text-text-secondary font-bold">
          <ul className="flex flex-col xl:flex-row gap-3.5 items-center">
            {navLink.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-8 flex-col xl:flex-row text-primary">
            <li>
              <Link to="/login" className="flex gap-2 items-center">
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
      </Container>
    </div>
  );
};

export default NavBar;
