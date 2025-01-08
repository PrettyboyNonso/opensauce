import { ChevronRight, Info } from "lucide-react";
import { useNavigate } from "react-router";

const Introduction = ({
  setSidebar,
}: {
  setSidebar: React.Dispatch<React.SetStateAction<string>>;
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
    <div className="pt-[4.9rem] px-6 max-w-full lg:max-w-[70%] lg:ml-64">
      <div className="flex font-nunit text-sm gap-2 items-center capitalize">
        <p className="dark:text-white text-black/70 font-semibold">docs</p>
        <p className="dark:text-white">{`>`}</p>
        <p className="dark:text-white font-semibold">introduction</p>
      </div>

      <div className="mt-7 w-full">
        <h1 className="dark:text-bgColor font-inter font-bold text-xl">
          What is opensauce?
        </h1>
        <p className="dark:text-white mt-4 font-nunit text-sm">
          <b className="text-primary">opensauce</b> is a modern, lightweight,
          and customizable React component library designed to help you build
          elegant and consistent UIs quickly. With a focus on accessibility,
          performance, and developer experience,{" "}
          <b className="text-primary">opensauce</b> empowers developers to
          create beautiful interfaces with minimal effort. Whether you're
          building a small application or a complex system,{" "}
          <b className="text-primary">opensauce</b> provides the building blocks
          to speed up development and ensure design consistency.
        </p>
      </div>

      <div className="w-full border-solid mt-6">
        <div className="w-full lg:w-[60%] h-full border border-red-500 gap-4 bg-red-200 shadow-md flex items-start px-4 py-5 rounded-md">
          <Info className="text-red-700 w-12" />
          <p className="text-black font-inter text-sm font-medium">
            We regret that OpenSauce v1.0 is currently available{" "}
            <b className="">only for React developers</b>. We're actively
            working to support other frameworks in future releases.
          </p>
        </div>
      </div>

      <div className="mt-12 w-full">
        <h1 className="dark:text-bgColor font-inter font-bold text-xl">
          Key Features
        </h1>
        <ul className="dark:text-white mt-4 font-nunit text-sm flex flex-col gap-4">
          <li>
            <b className="font-bold">Ease of use:</b> Opensauce is designed to
            get you started quickly. With ready-to-use, pre-built components,
            you can focus on building features instead of wrestling with complex
            configurations or reinventing the wheel. Each component is
            intuitive, well-documented, and follows modern development practices
            to make integration as seamless as possible.
          </li>
          <li>
            <b className="font-bold">Customizable</b>: Every component in
            opensauce can be tailored to fit your unique design requirements.
            Whether you need to tweak styles, adjust layouts, or completely
            override themes, the library gives you the flexibility to create
            interfaces that align perfectly with your branding and vision.
          </li>
          <li>
            <b className="font-bold">Accessible</b>: Accessibility is at the
            core of opensauce. All components are built with inclusive design
            principles, ensuring that your application is usable by as many
            people as possible, including those relying on assistive
            technologies. This commitment to accessibility helps you create a
            better experience for all users without additional effort.
          </li>
          <li>
            <b className="font-bold">Lightweight</b>: Performance is key in
            modern web applications. opensauce is optimized to keep your bundle
            size small, with no unnecessary dependencies or bloat. Each
            component is tree-shakeable, ensuring only the code you use gets
            included, resulting in faster load times and improved performance
            for your app.
          </li>
        </ul>
      </div>

      <div
        className="w-full flex mt-5 lg:hidden justify-end items-center text-sm"
        onClick={() => navigateComponent("installation")}
      >
        <div className="bg-gray-300 flex gap-2 px-2 py-2 rounded-md font-nunit font-bold capitalize text-secondary">
          <p>installation</p>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
