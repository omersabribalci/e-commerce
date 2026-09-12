import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { mediaIcons } from "../../data/Navigation/navbar";

const TopBar = () => {
  return (
    <div className="hidden xl:flex sm:flex-row max-w-7xl bg-bg-dark mx-auto justify-center items-center px-4 sm:px-6 py-4 text-text-light gap-22 whitespace-nowrap min-w-full">
      <div className="flex flex-row gap-4 text-small items-center">
        <div className="flex gap-2 items-center">
          <Phone color="white" />
          <span>(225) 555-0118</span>
        </div>
        <div className="flex gap-2 items-center">
          <Mail />
          <span>michelle.rivera@example.com</span>
        </div>
      </div>
      <div className="font-bold text-h6">
        Follow Us and get a chance to win 80% off
      </div>
      <div className="flex gap-2">
        <span className="font-bold text-h6">Follow Us :</span>
        <ul className="flex flex-row items-center gap-4">
          {mediaIcons.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>{item.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
