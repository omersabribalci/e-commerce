import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-row items-center">
        <li className="text-link text-text font-bold">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const formattedValue = value.charAt(0).toUpperCase() + value.slice(1);
          return (
            <li key={to} className="flex items-center">
              <ChevronRight
                className="text-muted font-bold text-h6"
                aria-hidden="true"
              />
              {isLast ? (
                <span
                  className="text-muted font-bold text-h6"
                  aria-current="page"
                >
                  {formattedValue}
                </span>
              ) : (
                <Link to={to} className="text-link text-text font-bold">
                  {formattedValue}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
