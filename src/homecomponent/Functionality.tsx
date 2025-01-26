import { Dates } from "../Date/Date";

const Functionality = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-tl from-white to-teal-50 dark:bg-gradient-to-tl dark:from-[#1A1A1A] dark:to-[#121212]">
      <div className="w-full lg:px-10 px-5 flex flex-col items-start">
        <h1 className="dark:text-white font-nunit mt-2 capitalize font-black text-2xl lg:text-3xl max-w-full lg:max-w-[50%]">
          seamlessly style components with{" "}
          <span className="dark:text-primary text-transparentAccent">
            TailwindCss
          </span>
        </h1>
        <p className="dark:text-white text-secondary text-sm lg:max-w-[60%] font-nunit font-medium mt-2">
          Enjoy the ease of styling components with flexibility and consistency.
          Customize designs effortlessly with utility-first classes, making it
          simple to create responsive, scalable UIs that fit any project.
        </p>
      </div>

      <div className="mt-8 lg:mt-12 flex lg:flex-row flex-col-reverse items-start">
        <div className="flex-shrink-0 flex-grow-0 lg:basis-[35%] px-4 lg:px-8 mt-4 lg:mt-10">
          <Dates className="dark:bg-black rounded-md bg-secondary text-white text-sm py-5" />
        </div>

        <div className="flex-shrink-0 flex-grow-0 max-w-full md:max-w-[65%]  lg:basis-[65%] px-4 lg:px-16 py-5">
          <div className="bg-codeBg w-full h-full rounded-md px-3 lg:px-8 py-8 text-sm lg:text-base">
            <div className="text-bgColor overflow-x-auto">
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
    <span className="text-componentGreen">   &lt;Calender <span className="text-codeBlue">className="<span className="text-codeOrange">dark:bg-black rounded-md bg-secondary text-white text-sm py-5</span>"</span>/&gt;</span> <br />

    <span className="text-functionBlue">{`  </div>`}</span><br />
    <span className="text-codePurple">{"  );"}</span><br />
    <span className="text-codePurple">{"}"}</span>
  </code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Functionality;
