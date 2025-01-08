import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [clicked, setClicked] = useState(false);
  function copyCode() {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  }
  return (
    <section className="py-8 pb-16 mt-20 lg:mt-24 px-5 lg:px-8 flex border-b border-solid">
      <div className="flex-shrink-0 flex-grow-0 basis-[100%] lg:basis-[50%] ">
        <h1 className="font-inter text-3xl lg:text-[44px] capitalize font-extrabold line">
          simplifying <span className="text-primary">react development</span>{" "}
          with customizable{" "}
          <span className="bg-transparentAccent border-r-[3px] border-primary capitalize text-bgColor rounded-tl-md rounded-bl-md py-1 px-3">
            components
          </span>
        </h1>
        <p className="mt-4 font-nunit lg:text-base text-sm">
          Empower your workflow with tools that simplify the complexities of
          building dynamic user interfaces. Our customizable components are
          designed to save time, boost productivity, and provide seamless
          integration into your React projects. Experience the flexibility and
          power of components that adapt to your needs, giving you the freedom
          to focus on creating impactful applications.
        </p>
        <div className="mt-4 flex lg:flex-row flex-col gap-3 lg:gap-6 lg:items-center">
          <button className="bg-secondary text-bgColor capitalize font-nunit font-semibold px-5 rounded-sm text-xs lg:text-sm py-3 lg:py-2">
            get started
          </button>
          <button className=" hidden lg:flex gap-4  items-center bg-transparent border-2 border-solid text-secondary  font-nunit font-semibold px-4 rounded-sm text-sm py-2">
            &gt; npm i @opensauce/react{" "}
            {clicked ? (
              <CopyCheck className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" onClick={copyCode} />
            )}
          </button>
        </div>
      </div>

      <div className="flex-shrink-0 flex-grow-0 basis-[50%] px-10 py-5 hidden lg:block">
        <div className="bg-codeBg w-full h-full rounded-md px-8 py-8">
          <div className="text-bgColor">
            <p className="font-nunit">
              <span className="text-codePurple">import</span> &#123;
              <span className="text-codeBlue"> Calender </span>&#125;{" "}
              <span className="text-codePurple">from </span>
              <span className="text-codeOrange ">
                "@/components/ui/calender"
              </span>
            </p>

            {/* prettier-ignore */}
            <pre className="mt-4 font-nunit">
  <code>
    <span className="text-functionBlue">function</span> <span className="text-constLemon">App</span>(){' '}
    <span className="text-codePurple">{"{"}</span>
    <br />
    <span className="text-codePurple">{" return ("}</span><br />
    <span className="text-functionBlue">{`  <div/>`}</span><br />
    <span className="text-componentGreen">   &lt;Calender <span className="text-codeBlue">className="<span className="text-codeOrange">text-sm border-black font-mons</span>"</span>/&gt;</span><br />
    <span className="text-functionBlue">{`  </div>`}</span><br />
    <span className="text-codePurple">{"  );"}</span><br />
    <span className="text-codePurple">{"}"}</span>
  </code>
</pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
