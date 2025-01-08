import { Copy } from "lucide-react";

const Installation = () => {
  return (
    <div className="pt-[4.9rem] px-6 w-full ml-64">
      <div className="flex font-nunit text-sm gap-2 items-center capitalize">
        <p className="text-black/70 font-semibold">docs</p>
        <p>{`>`}</p>
        <p className="font-semibold">installation</p>
      </div>

      <div className="mt-7 w-full">
        <h1 className="font-inter font-bold text-xl">Installation</h1>
        <p className="font-inter text-sm mt-1">
          Install and configure a package manager
        </p>
      </div>

      <div className="w-full mt-8">
        <p className="text-sm font-nunit font-semibold text-gray-500">
          Firstly, create a React project
        </p>

        <div className="mt-4 bg-codeBg w-[60%] rounded-md">
          <div className="px-3 py-2 flex justify-between items-center">
            <div className="flex-shrink-0 flex-grow-0 basis-[22%] flex justify-between font-inter text-xs">
              {/* <p className="text-gray-400 font-bold">pnpm</p> */}
              <p className="text-white font-bold">npm</p>
              {/* <p className="text-gray-400 font-bold">yarn</p> */}
            </div>

            <div className="flex-shrink-0 flex-grow-0 basis-[78%] flex justify-end">
              <Copy className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="px-2 border-t border-solid py-5">
            <p className="font-nunit text-sm text-white ">
              npx create-react-app@latest
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-8">
        <p className="text-sm font-nunit font-semibold text-gray-500">
          Secondly, install opensauce
        </p>

        <div className="mt-4 bg-codeBg w-[60%] rounded-md">
          <div className="px-3 py-2 flex justify-between items-center">
            <div className="flex-shrink-0 flex-grow-0 basis-[22%] flex justify-between font-inter text-xs">
              <p className="text-gray-400 font-bold">pnpm</p>
              <p className="text-white font-bold">npm</p>
              <p className="text-gray-400 font-bold">yarn</p>
            </div>

            <div className="flex-shrink-0 flex-grow-0 basis-[78%] flex justify-end">
              <Copy className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="px-2 border-t border-solid py-5">
            <p className="font-nunit text-sm text-white ">
              npm install opensauce/react
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-8">
        <p className="text-sm font-nunit font-semibold text-gray-500">
          Lastly, import and use your desired component
        </p>

        <div className="mt-4 bg-codeBg w-[60%] rounded-md px-3 py-3 text-sm">
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
    </div>
  );
};

export default Installation;
