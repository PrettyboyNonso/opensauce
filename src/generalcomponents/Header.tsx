import { MenuIcon, MoonIcon, SunDimIcon } from "lucide-react";
import { Link, NavLink } from "react-router";
import useSidebar from "../context/useSidebar";
import { useState } from "react";

const Header = () => {
  const { setSidebar } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className=" w-full px-6 py-5 fixed bg-bgColor/50 border-b border-solid top-0 backdrop-blur-sm z-50 ">
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
              <ul className="flex gap-4 items-center font-inter font-semibold mt-1 capitalize text-sm text-textColor">
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
            <div className="border border-solid w-14 px-1 shadow-md rounded-2xl flex justify-between items-center">
              <MoonIcon className="w-5 h-5 invisible text-gray-800 cursor-pointer" />
              <SunDimIcon className="text-orange-600 cursor-pointer" />
            </div>

            <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon />
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden ${
            isOpen ? "block" : "hidden"
          } w-full py-3 mt-7`}
        >
          <nav className="">
            <ul className="flex flex-col gap-4 items-center font-inter font-semibold mt-1 capitalize text-sm text-textColor">
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
      </header>
    </>
  );
};

export default Header;
