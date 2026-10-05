import { Link } from "react-router-dom";

export const FooterSection = ({
  title,
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
}) => {
  return (
    <div>
      <div className="text-text font-bold text-h5 py-5">{title}</div>
      <ul className="flex flex-col gap-2.5 font-bold text-link text-text-secondary text-">
        <li>
          <Link to={subtitle1?.link}>{subtitle1?.text}</Link>
        </li>
        <li>
          <Link to={subtitle2?.link}>{subtitle2?.text}</Link>
        </li>
        <li>
          <Link to={subtitle3?.link}>{subtitle3?.text}</Link>
        </li>
        <li>
          <Link to={subtitle4?.link}>{subtitle4?.text}</Link>
        </li>
      </ul>
    </div>
  );
};
