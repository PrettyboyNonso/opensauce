const Testimonies = () => {
  const TestimoniesCard = () => {
    return (
      <div className=" dark:border-2 dark:border-darkModeColorTwo animate-testimonies flex-shrink-0 flex-grow-0 basis-[50%] lg:basis-[18%] border border-solid min-h-28 rounded-md shadow-md"></div>
    );
  };
  const TestimoniesCardTwo = () => {
    return (
      <div className=" dark:border-2 dark:border-darkModeColorTwo animate-testimoniesecond flex-shrink-0 flex-grow-0 basis-[50%] lg:basis-[18%] border border-solid min-h-28 rounded-md shadow-md"></div>
    );
  };
  return (
    <section className="relative flex flex-col gap-4 px-3 lg:px-10 min-h-48 py-10 w-full">
      <div className="z-30 mb-7 flex flex-col items-center">
        <h1 className="dark:text-white lg:text-3xl text-2xl font-nunit capitalize font-black">
          what our{" "}
          <span className="dark:text-primary text-transparentAccent">
            Users
          </span>{" "}
          are saying{" "}
        </h1>
        <p className="dark:text-white text-secondary text-sm max-w-[90%] lg:max-w-[60%] font-nunit font-medium mt-2">
          Hear from our developers about their experiences and insights while
          building amazing products.
        </p>
      </div>
      <div className="dark:bg-darkModeColor absolute left-0 bottom-0 bg-bgColor h-full w-[5%] z-20"></div>
      <div className="dark:bg-darkModeColor absolute right-0 bottom-0 bg-bgColor h-full w-[5%] z-20"></div>
      <div className="flex flex-nowrap w-full gap-5 z-10 overflow-hidden">
        <TestimoniesCard />
        <TestimoniesCard />
        <TestimoniesCard />
        <TestimoniesCard />
        <TestimoniesCard />
        <TestimoniesCard />
        <TestimoniesCard />
        <TestimoniesCard />
      </div>
      <div className="flex flex-nowrap w-full gap-5 z-10 overflow-hidden">
        <TestimoniesCardTwo />
        <TestimoniesCardTwo />
        <TestimoniesCardTwo />
        <TestimoniesCardTwo />
        <TestimoniesCardTwo />
        <TestimoniesCardTwo />
        <TestimoniesCardTwo />
        <TestimoniesCardTwo />
      </div>
    </section>
  );
};

export default Testimonies;
