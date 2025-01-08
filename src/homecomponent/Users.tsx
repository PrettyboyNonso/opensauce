const Users = () => {
  return (
    <div className="w-full flex flex-col px-2 lg:px-16 py-10 dark:border-b dark:border-darkModeColorTwo">
      <div className="gap-2  snap-mandatory snap-x overflow-x-auto w-full flex min-h-28 items-center justify-between lg:items-center lg:justify-center px-8">
        <div className="dark:bg-white rounded-md snap-start  flex-shrink-0 flex-grow-0 basis-[33%]  lg:basis-[15%] lg:w-[15%] h-20 flex justify-center items-center">
          <img
            src="/netflix.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="dark:bg-white snap-start rounded-md flex-shrink-0 flex-grow-0 basis-[33%]  lg:basis-[15%] lg:w-[15%] h-20 flex justify-center items-center">
          <img
            src="/amazon.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="dark:bg-white snap-start rounded-md flex-shrink-0 flex-grow-0 basis-[33%]   lg:basis-[15%] lg:w-[15%] h-20 flex justify-center items-center">
          <img
            src="/download-removebg-preview.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="dark:bg-white snap-start rounded-md flex-shrink-0 flex-grow-0 basis-[33%]   lg:basis-[15%] lg:w-[15%] h-20 flex justify-center items-center">
          <img
            src="/tailwind.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="dark:bg-white  snap-start rounded-md flex-shrink-0 flex-grow-0 basis-[33%] lg:basis-[15%] lg:w-[15%] h-20 flex justify-center items-center">
          <img
            src="/vercel.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <p className="dark:text-white mt-4 lg:mt-5 self-center text-sm font-nunit max-w-[100%] lg:max-w-[40%] text-center">
        Leading product teams worldwide rely on opensauce to provide an
        exceptional experience for developers and users alike.
      </p>
    </div>
  );
};

export default Users;
