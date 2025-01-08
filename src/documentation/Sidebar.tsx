import { useNavigate } from "react-router";

const Sidebar = ({
  setSidebar,
  sidebar,
}: {
  setSidebar: React.Dispatch<React.SetStateAction<string>>;
  sidebar: string;
}) => {
  const navigate = useNavigate();

  const navigateComponent = (sidebarState: string) => {
    setSidebar(sidebarState);
    if (sidebarState !== "components") {
      navigate("/docs");
    } else {
      navigate("/components");
    }
  };
  return (
    <aside className="lg:block hidden flex-shrink-0 flex-grow-0 basis-[18%] w-[18%] h-dvh  border-r border-solid pt-20 px-6 fixed">
      <h2 className="font-nunit capitalize font-bold text-sm">
        getting started
      </h2>
      <ul className="flex flex-col gap-3 mt-5">
        <li
          className={`font-nunit capitalize font-semibold text-sm cursor-pointer rounded-md ${
            sidebar === "introduction" &&
            "bg-transparentAccent px-2 py-2 text-white"
          }`}
          onClick={() => navigateComponent("introduction")}
        >
          introduction
        </li>
        <li
          className={`font-nunit capitalize font-semibold text-sm rounded-md cursor-pointer ${
            sidebar === "installation" &&
            "bg-transparentAccent px-2 py-2 text-white"
          } }`}
          onClick={() => navigateComponent("installation")}
        >
          installation
        </li>
      </ul>
      <h2 className="font-nunit capitalize font-extrabold text-sm mt-10">
        components
      </h2>
      <ul className="flex flex-col gap-3 mt-3">
        <li
          className={`font-nunit capitalize font-semibold text-sm bg-transparent py-2  rounded-md cursor-pointer ${
            sidebar === "components" &&
            "bg-transparentAccent px-2 py-2 text-white"
          }`}
          onClick={() => navigateComponent("components")}
        >
          calender
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
