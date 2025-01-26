import { Dates } from "../../Date/Date";

const DateComponent = () => {
  return (
    <div className="pt-[4.9rem] px-6 w-full lg:ml-64">
      {" "}
      <div className="flex font-nunit text-sm gap-2 items-center capitalize">
        <p className="dark:text-white text-black/70 font-semibold">
          components
        </p>
        <p className="dark:text-white">{`>`}</p>
        <p className="font-semibold dark:text-white">calender</p>
      </div>
      <div className="mt-7 w-full">
        <h1 className="font-inter font-bold text-xl dark:text-white">
          Calender
        </h1>
        <p className="font-inter text-sm mt-1 dark:text-white">
          A simple and interactive calendar UI to view and select dates.
        </p>
      </div>
      <div className="w-full lg:w-[40%] mt-12">
        <Dates className="rounded-md bg-codeBg text-white" />
      </div>
      <div className="mt-10 w-[90]">
        <h1 className="font-inter font-bold text-xl dark:text-white">Usage</h1>
        <p className="text-sm font-nunit font-bold capitalize mt-4 dark:text-white">
          import the component into your code{" "}
        </p>
        <div className="mt-3 bg-codeBg overflow-x-auto lg:w-[60%] rounded-md px-5 py-5 text-sm">
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
    <span className="text-functionBlue">{`  <div>`}</span><br />
    <span className="text-componentGreen">   &lt;Calender <span className="text-codeBlue">className="<span className="text-codeOrange"></span>"</span>/&gt;</span><br />
    <span className="text-functionBlue">{`  </div>`}</span><br />
    <span className="text-codePurple">{"  );"}</span><br />
    <span className="text-codePurple">{"}"}</span>
  </code>
</pre>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm font-nunit font-bold capitalize dark:text-white">
            style seamlessly with tailwind
          </p>
          <div className="mt-3 bg-codeBg overflow-x-auto lg:w-[60%] rounded-md px-5 py-5 text-sm">
            <div className="text-bgColor">
              {/* prettier-ignore */}
              <pre className="mt-4 font-nunit">
  <code>
    <span className="text-functionBlue">{`  <div/>`}</span><br />
    <span className="text-componentGreen">   &lt;Calender <span className="text-codeBlue bg-transparentAccent">className="<span className="text-codeOrange">rounded-md bg-black text-white</span>"</span>/&gt;</span><br />
    <span className="text-functionBlue">{`  </div>`}</span><br />
  </code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateComponent;
