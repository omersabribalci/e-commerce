import PageContent from "../layouts/PageContent";
import team1 from "../assets/team/team-1.jpg";
import team2 from "../assets/team/team-2.jpg";
import team3 from "../assets/team/team-3.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const TeamPage = () => {
  const team = [
    { image: team1, name: "Name Surname", profession: "Founder" },
    { image: team2, name: "Name Surname", profession: "Founder" },
    { image: team3, name: "Name Surname", profession: "Founder" },
  ];
  const mediaIcons = [
    {
      icon: <FaTwitter className="text-primary" />,
      link: "https://x.com/",
    },
    {
      icon: <FaFacebook className="text-primary" />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <FaInstagram className="text-primary" />,
      link: "https://www.instagram.com/",
    },
    {
      icon: <FaLinkedin className="text-primary" />,
      link: "https://www.linkedin.com/",
    },
  ];
  return (
    <PageContent>
      <div className="px-16 lg:px-48.75">
        <div className="py-7.5 lg:py-28 lg:px-55 flex flex-col items-center text-center gap-7.5">
          <h2 className="text-h2 text-text font-bold">Meet Our Team</h2>
          <p className="text-paragraph text-text-secondary">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <div className="flex flex-col lg:flex-row gap-7.5">
            {team.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-7.5 items-center justify-center"
              >
                <img
                  src={item.image}
                  className="min-w-80 min-h-58 object-contain"
                />
                <h5 className="text-h5 text-text font-bold">{item.name}</h5>
                <h6 className="text-h6 text-text-secondary font-bold">
                  {item.profession}
                </h6>
                <ul className="flex flex-row gap-5">
                  {mediaIcons.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContent>
  );
};

export default TeamPage;
