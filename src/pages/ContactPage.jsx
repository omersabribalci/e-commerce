import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import ButtonMd from "../components/ui/ButtonMd";
import PageContent from "../layouts/PageContent";

const mediaIcons = [
  {
    icon: <FaTwitter size={30} className="text-muted" />,
    link: "https://x.com/",
  },
  {
    icon: <FaFacebook size={30} className="text-muted" />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <FaInstagram size={30} className="text-muted" />,
    link: "https://www.instagram.com/",
  },
  {
    icon: <FaLinkedin size={30} className="text-muted" />,
    link: "https://www.linkedin.com/",
  },
];

const ContactPage = () => {
  return (
    <PageContent>
      <div className="px-16 lg:px-48.75">
        <div className="py-28 lg:px-55 flex flex-col items-center text-center gap-7.5">
          <h2 className="text-h2 text-text font-bold">
            Get answers to all your <br /> questions.
          </h2>
          <h4 className="text-h4 text-text-secondary">
            Problems trying to resolve the conflict between the two <br /> major
            realms of Classical physics:
          </h4>
          <ButtonMd className="w-68 h-14">CONTACT OUR COMPANY</ButtonMd>
          <ul className="flex flex-row gap-8.5 p-2.5">
            {mediaIcons.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageContent>
  );
};

export default ContactPage;
