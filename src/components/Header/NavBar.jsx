import { CircleUser } from "lucide-react";
import { Link } from "react-router-dom";
import { navIcons, navLink } from "../../data/Navigation/navbar";
import Container from "../ui/Container";
import { useDispatch, useSelector } from "react-redux";
import Gravatar from "react-gravatar";
import { useEffect, useRef, useState } from "react";
import { getCategories } from "../../store/actions/productActions";

const NavBar = () => {
  const categories = useSelector((state) => state.product.categories);
  const dispatch = useDispatch();
  const shopMenuRef = useRef(null);
  const user = useSelector((state) => state.client.user);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, [dispatch, categories.length]);

  useEffect(() => {
    if (!isCategoryOpen) return;

    const handleOutsideClick = (event) => {
      const clickedOutside =
        shopMenuRef.current && !shopMenuRef.current.contains(event.target);

      if (clickedOutside) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [isCategoryOpen]);

  const womanCategories = categories
    .filter((category) => category.gender === "k")
    .sort((a, b) => b.rating - a.rating);
  const manCategories = categories
    .filter((category) => category.gender === "e")
    .sort((a, b) => b.rating - a.rating);

  return (
    <div className="bg-bg-light">
      <Container
        as="nav"
        aria-label="Primary navigation"
        className="flex flex-col xl:flex-row gap-8 xl:gap-30 justify-between items-center py-4"
      >
        <Link
          to="/"
          className="text-text font-display font-bold text-h3"
          aria-label="Bandage home"
        >
          Bandage
        </Link>

        <div className="text-mobile-menu xl:text-link xl:flex-row flex flex-col gap-8 xl:gap-32 items-center text-text-secondary font-bold">
          <ul className="flex flex-col xl:flex-row gap-3.5 items-center">
            {navLink.map((item, index) => {
              const isShop = item.text === "Shop";

              return (
                <li
                  key={index}
                  className="relative"
                  ref={isShop ? shopMenuRef : null}
                  onMouseEnter={() => isShop && setIsCategoryOpen(true)}
                  onMouseLeave={() => isShop && setIsCategoryOpen(false)}
                >
                  {isShop ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setIsCategoryOpen((current) => !current)}
                        className="cursor-pointer flex flex-row gap-1 items-center justify-center transition-colors hover:text-primary"
                      >
                        {item.text} {item.icon}
                      </button>
                      {isCategoryOpen && (
                        <div className="absolute bg-bg-light p-8 z-50 flex flex-col  gap-4 rounded-md shadow-accentued">
                          <Link
                            to="/shop"
                            onClick={() => setIsCategoryOpen(false)}
                            className="text-link font-bold text-text transition-colors hover:text-primary pl-4"
                          >
                            Tüm Kategoriler
                          </Link>
                          <div className="flex flex-row gap-2 lg:gap-10 flex-wrap md:flex-nowrap">
                            <div className="p-4">
                              <h4 className="text-text text-h4 font-bold mb-4">
                                Kadın
                              </h4>
                              <ul className="flex flex-col lg:gap-4">
                                {womanCategories.map((cat) => (
                                  <li
                                    key={cat.id}
                                    className="transition-all hover:text-primary hover:scale-110"
                                  >
                                    <Link
                                      onClick={() => setIsCategoryOpen(false)}
                                      to={`/shop/${cat.gender === "k" ? "kadin" : "erkek"}/${cat.code.split(":")[1]}/${cat.id}`}
                                      className="text-link text-text-secondary font-semibold transition-all hover:text-primary"
                                    >
                                      {cat.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="border text-black/10"></div>
                            <div className="p-4">
                              <h4 className="text-text text-h4 font-bold mb-4">
                                Erkek
                              </h4>
                              <ul className="flex flex-col lg:gap-4">
                                {manCategories.map((cat) => (
                                  <li
                                    className="transition-all hover:text-primary hover:scale-105"
                                    key={cat.id}
                                  >
                                    <Link
                                      onClick={() => setIsCategoryOpen(false)}
                                      to={`/shop/${cat.gender === "k" ? "kadin" : "erkek"}/${cat.code.split(":")[1]}/${cat.id}`}
                                      className="text-link text-text-secondary font-semibold transition-all hover:text-primary"
                                    >
                                      {cat.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link to={item.link} className="hover:text-primary">
                      {item.text}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <ul className="flex items-center gap-8 flex-col xl:flex-row text-primary">
            <li>
              {user.email ? (
                <div className="flex flex-row gap-2 items-center justify-center">
                  <Gravatar
                    email={user?.email}
                    size={40}
                    default="wavatar"
                    className="rounded-4xl"
                  />
                  <p className="text-h6 text-text-secondary">{user.name}</p>
                </div>
              ) : (
                <Link to="/login" className="flex gap-2 items-center">
                  <CircleUser />
                  <span className="whitespace-nowrap">Login / Register</span>
                </Link>
              )}
            </li>
            {navIcons.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>{item.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
