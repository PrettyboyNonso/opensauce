import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="dark:bg-darkModeColor dark:border-none w-full border-t gap-8 lg:gap-0 relative bottom-0 z-50 bg-bgColor border-solid h-full px-5 lg:px-12 py-14 flex flex-col lg:flex-row items-center">
      <div className="flex-shrink-0 flex-grow-0 basis-[40%] flex flex-col lg:gap-3">
        <div className="flex items-center w-10 h-10 gap-2">
          <img
            src="/restaurant-removebg-preview.png"
            alt=""
            className="w-full h-full  object-contain "
          />
          <h1 className="dark:text-white font-azeret text-secondary font-bold mt-1">
            opensauce
          </h1>
        </div>

        <div>
          <p className="dark:text-white font-nunit text-sm font-semibold">
            Join our newsletter, be the first to hear about our updates
          </p>
        </div>
        <form
          action=""
          className="font-nunit text-sm font-semibold flex flex-col gap-1 mt-4 lg:mt-0"
        >
          <label htmlFor="" className="text-xs dark:text-white">
            email address
          </label>
          <div className="flex gap-2 items-center mt-1">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="outline-none border border-transparentAccent text-xs w-[60%] h-8 px-3"
            />

            <button className=" bg-primary w-fit px-4 text-white py-1 rounded-sm">
              subscribe
            </button>
          </div>
        </form>
      </div>

      <div className="dark:text-white w-full flex justify-between lg:justify-normal  flex-shrink-0 flex-grow-0 lg:basis-[60%] px-0 lg:px-16 lg:gap-28">
        <div>
          <h2 className="font-nunit capitalize font-black text-sm">links</h2>
          <ul className="mt-2 capitalize font-nunit lg:text-sm flex flex-col gap-1 font-semibold text-xs">
            <NavLink to="/docs">
              {" "}
              <li>docs</li>
            </NavLink>
            <NavLink to="/components">
              {" "}
              <li>components</li>
            </NavLink>

            <NavLink to="/contribute">
              <li>contribute</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <h2 className="font-nunit capitalize font-black text-xs lg:text-sm">
            guides
          </h2>
          <ul className="mt-2 capitalize font-nunit text-sm flex flex-col gap-1 font-semibold">
            <NavLink to="/docs">
              <li>get started</li>
            </NavLink>
          </ul>
        </div>
        {/* <div>
          <h2 className="font-nunit capitalize font-black text-xs lg:text-sm">
            legal
          </h2>
          <ul className="mt-2 capitalize font-nunit text-sm flex flex-col gap-1 font-semibold">
            <li>privacy policy</li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
