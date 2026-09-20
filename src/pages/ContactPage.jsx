import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import ButtonMd from "../components/ui/ButtonMd";
import Container from "../components/ui/Container";
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
      <Container
        as="section"
        aria-labelledby="contact-title"
        className="py-28 flex flex-col items-center text-center gap-7.5"
      >
        <h1 id="contact-title" className="text-h2 text-text font-bold">
          Get answers to all your <br /> questions.
        </h1>
        <h4 className="text-h4 text-text-secondary">
          Problems trying to resolve the conflict between the two <br /> major
          realms of Classical physics:
        </h4>
        <ButtonMd className="w-68 h-14">CONTACT OUR COMPANY</ButtonMd>
        <nav aria-label="Social media">
          <ul className="flex flex-row gap-8.5 p-2.5">
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
    </PageContent>
  );
};

export default ContactPage;
