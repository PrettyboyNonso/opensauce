import { MenuIcon, MoonIcon, SunDimIcon } from "lucide-react";
import { Link, NavLink } from "react-router";
import useSidebar from "../context/useSidebar";
import { useEffect, useState } from "react";

const Header = () => {
  const { setSidebar, theme, setTheme } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = sessionStorage.getItem("theme");
    if (!savedTheme) {
      sessionStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      const html = document.documentElement;
      if (savedTheme === "dark") {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
  }, []);
  const setThemeFunc = (color: string) => {
    setTheme(color);
    sessionStorage.setItem("theme", color);
    const html = document.documentElement;
    if (color === "dark") {
      html.classList.add("dark");
    } else if (color === "light") {
      html.classList.remove("dark");
    }
  };
  return (
    <>
      <header className="shadow-sm w-full px-6 py-5 fixed dark:bg-darkModeColor/50 bg-bgColor/50 dark:border-none border-b border-solid top-0 backdrop-blur-sm z-50 ">
        <div className="flex items-center">
          <div className="flex items-center flex-shrink-0 flex-grow-0 gap-3 basis-[50%]">
            <Link to="/">
              <div className="w-9">
                <img
                  src="/restaurant-removebg-preview.png"
                  alt="opensause logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <nav className="hidden lg:block">
              <ul className="dark:text-white flex gap-4 items-center font-inter font-semibold mt-1 capitalize text-sm text-textColor">
                <NavLink to="/docs">
                  <li
                    className="cursor-pointer"
                    onClick={() => setSidebar("introduction")}
                  >
                    docs
                  </li>
                </NavLink>
                <NavLink
                  to="/components"
                  onClick={() => setSidebar("components")}
                >
                  <li className="cursor-pointer">component</li>
                </NavLink>
                {/* <li className="cursor-pointer">sponsor</li> */}
                <NavLink to="/contribute">
                  <li className="cursor-pointer">contribute</li>
                </NavLink>
              </ul>
            </nav>
          </div>

          <div className="items-center flex-shrink-0 flex-grow-0 gap-5 lg:gap-2 basis-[50%] flex justify-end">
            <div className="border border-solid dark:border-none w-14 px-1 shadow-md rounded-2xl flex items-center">
              <MoonIcon
                className={`text-white ${
                  theme === "dark" ? "visible" : "invisible"
                } cursor-pointer flex-shrink-0 flex-grow-0 basis-[50%]`}
                onClick={() => setThemeFunc("light")}
              />

              <SunDimIcon
                className={`text-orange-600 cursor-pointer ${
                  theme === "light" ? "visible" : "invisible"
                } flex-shrink-0 flex-grow-0 basis-[50%]`}
                onClick={() => setThemeFunc("dark")}
              />
            </div>

            <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon className="dark:text-white" />
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden ${
            isOpen ? "block" : "hidden"
          } w-full py-3 mt-7`}
        >
          <nav className="">
            <ul className="dark:text-white flex flex-col gap-4 items-center font-inter font-semibold mt-1 capitalize text-sm text-textColor">
              <NavLink to="/docs">
                <li
                  className="cursor-pointer"
                  onClick={() => setSidebar("introduction")}
                >
                  docs
                </li>
              </NavLink>
              <NavLink
                to="/components"
                onClick={() => setSidebar("components")}
              >
                <li className="cursor-pointer">component</li>
              </NavLink>

              <NavLink to="/contribute">
                <li className="cursor-pointer">contribute</li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
