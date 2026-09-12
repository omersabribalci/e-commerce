import { Link } from "react-router-dom";
import { FooterSection } from "../components/Footer/FooterSection";
import { footerSectionTitles, mediaIcons } from "../data/Footer/footerSection";

const Footer = () => {
  return (
    <>
      <div className="px-11 md:px-50 flex flex-col sm:flex-row py-10 justify-between gap-3 bg-gray-light-1">
        <h3 className="text-text font-display font-bold text-h3">Bandage</h3>
        <ul className="flex gap-4 text-primary">
          {mediaIcons.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>{item.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#FFFFFF] px-11 md:px-50">
        <hr className="hidden md:block text-[#E6E6E6]" />
        <div className="flex flex-col justify-between lg:flex-row py-8 md:gap-10">
          {footerSectionTitles.map((item, index) => (
            <FooterSection
              key={index}
              title={item.title}
              subtitle1={item.subtitle1}
              subtitle2={item.subtitle2}
              subtitle3={item.subtitle3}
              subtitle4={item.subtitle4}
            />
          ))}
          <div>
            <h5 className="text-text font-bold text-h5 py-5">Get in Touch</h5>
            <div className="min-w-50 max-w-[320px] h-15 flex flex-row border border-gray-200 rounded-[5px]">
              <input
                type="email"
                className="flex-4/6 pl-2 placeholder-text-secondary focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50"
                placeholder="Your Email"
              />
              <button className="p-1 flex-2/6 cursor-pointer hover:bg-hover transition-colors duration-200 bg-primary text-text-light rounded-[5px]">
                Subscribe
              </button>
            </div>
            <p className="text-text-secondary mt-5">Lorem impsum dolor amit</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-light-1">
        <p className="py-6 text-h6 text-center text-text-secondary font-bold">
          Made With Love By Figmaland All Right Reserved{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
