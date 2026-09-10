import NavBar from "../components/Header/NavBar";
import TopBar from "../components/Header/TopBar";

const Header = () => {
  return (
    <header className="w-full flex flex-col justify-between">
      <TopBar />
      <NavBar />
    </header>
  );
};

export default Header;
