const Testimonies = () => {
  const TestimoniesCard = () => {
    return (
      <div className="flex-shrink-0 flex-grow-0 basis-[50%] lg:basis-[18%] border border-solid min-h-28 rounded-md shadow-md"></div>
    );
  };
  return (
    <section className="relative flex flex-col gap-4 px-3 lg:px-10 min-h-48 py-10 w-full">
      <div className="z-30 mb-7 flex flex-col items-center">
        <h1 className="lg:text-3xl text-2xl font-nunit capitalize font-black">
          what our <span className="text-transparentAccent">users</span> are
          saying{" "}
        </h1>
        <p className=" text-secondary text-sm max-w-[90%] lg:max-w-[60%] font-nunit font-medium mt-2">
          Hear from our developers about their experiences and insights while
          building amazing products.
        </p>
      </div>
      <div className="absolute left-0 bottom-0 bg-bgColor h-full w-[5%] z-20"></div>
      <div className="absolute right-0 bottom-0 bg-bgColor h-full w-[5%] z-20"></div>
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
        <TestimoniesCard />
        <TestimoniesCard />
        <TestimoniesCard />
        <TestimoniesCard />
        <TestimoniesCard />
        <TestimoniesCard />
        <TestimoniesCard />
        <TestimoniesCard />
      </div>
    </section>
  );
};

export default Testimonies;
