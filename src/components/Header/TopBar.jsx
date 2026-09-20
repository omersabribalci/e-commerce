import { Mail, Phone } from "lucide-react";
import { mediaIcons } from "../../data/Navigation/navbar";
import Container from "../ui/Container";

const TopBar = () => {
  return (
    <div className="hidden bg-bg-dark text-text-light xl:block">
      <Container
        className="flex flex-row items-center justify-between py-4 whitespace-nowrap"
      >
        <address className="flex flex-row gap-4 text-small items-center not-italic">
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
        </address>
        <p className="font-bold text-h6">
          Follow Us and get a chance to win 80% off
        </p>
        <nav className="flex gap-2" aria-label="Social media">
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
        </nav>
      </Container>
    </div>
  );
};

export default TopBar;
