import { Mail, Phone } from "lucide-react";
import { mediaIcons } from "../../data/Navigation/navbar";

const TopBar = () => {
  return (
    <nav className="hidden xl:flex sm:flex-row max-w-7xl bg-bg-dark mx-auto justify-center items-center px-4 sm:px-6 py-4 text-text-light gap-22 whitespace-nowrap min-w-full">
      <div className="flex flex-row gap-4 text-small items-center">
        <div className="flex gap-2 items-center">
          <Phone color="white" />
          <a href="tel:+902255550118">(225) 555-0118</a>
        </div>
        <div className="flex gap-2 items-center">
          <Mail />
          <a href="mailto:michelle.rivera@example.com">
            michelle.rivera@example.com
          </a>
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
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
