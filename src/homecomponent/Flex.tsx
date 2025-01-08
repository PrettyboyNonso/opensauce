const Flex = () => {
  return (
    <div className=" dark:bg-darkModeColor min-h-56 bg-white w-full flex lg:flex-row flex-col items-center lg:py-0 py-4 lg:px-0 px-3 lg:justify-center text-white gap-4 lg:gap-6">
      <div className="py-6  rounded-md w-full shadow-md flex-shrink-0 flex-grow-0 min-h-20 lg:basis-[20%] justify-center flex flex-col items-center bg-secondary">
        <h1 className="font-inter text-2xl lg:text-4xl font-black">300+</h1>
        <p className="mt-2 font-nunit ">npm installations</p>
      </div>
      <div className="py-6 w-full rounded-md shadow-md flex-shrink-0 flex-grow-0 min-h-20 lg:basis-[20%] justify-center flex flex-col items-center bg-primary">
        <h1 className="font-inter text-2xl lg:text-4xl font-black">1</h1>
        <p className="mt-2 font-nunit ">developer</p>
      </div>
      <div className="py-6 w-full rounded-md shadow-md flex-shrink-0 flex-grow-0 min-h-20 lg:basis-[20%] justify-center flex flex-col items-center bg-secondary">
        <h1 className="font-inter text-2xl lg:text-4xl font-black">100+</h1>
        <p className="mt-2 font-nunit ">web projects</p>
      </div>
      <div className="py-6 w-full rounded-md shadow-md flex-shrink-0 flex-grow-0 min-h-20 lg:basis-[20%] justify-center flex flex-col items-center bg-primary">
        <h1 className="font-inter text-2xl lg:text-4xl font-black">50+</h1>
        <p className="mt-2 font-nunit ">client reviews</p>
      </div>
    </div>
  );
};

export default Flex;
