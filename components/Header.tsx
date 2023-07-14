import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 navbar w-full z-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <div className="flex-1 flexStart"></div>
          <div className="flex items-center justify-center">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
