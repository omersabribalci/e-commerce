import { ChevronRight } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
const Breadcrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <ul className="flex flex-row">
      <li className="text-link text-text font-bold">
        <Link to="/">Home</Link>
      </li>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const formattedValue = value.charAt(0).toUpperCase() + value.slice(1);
        return (
          <React.Fragment key={to}>
            <li>
              <ChevronRight className="text-muted font-bold text-h6" />
            </li>
            <li>
              {isLast ? (
                <span className="text-muted font-bold text-h6">
                  {formattedValue}
                </span>
              ) : (
                <Link to={to} className="text-link text-text font-bold">
                  {formattedValue}
                </Link>
              )}
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Breadcrumb;
