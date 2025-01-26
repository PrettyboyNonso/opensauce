import React from "react";

const Testimonies = () => {
  type ReviewProps = {
    name: string;
    userName: string;
    review: string;
  };

  const twitterReviews = [
    {
      name: "Mary John",
      userName: "@mary_codes",
      review:
        "I love the clean design and accessibility features of the components. Perfect for modern web apps!",
    },
    {
      name: "Chike Eze",
      userName: "@chike_dev",
      review:
        "This component library has simplified my workflow. Highly customizable and developer-friendly.",
    },
    {
      name: "Adebayo Taiwo",
      userName: "@adebayo_taiwo",
      review:
        "These components are a game changer! Built a project in half the time with seamless integration.",
    },
    {
      name: "Fatima Musa",
      userName: "@fatima_codes",
      review:
        "The attention to detail in the design is top-notch. A must-have for every frontend developer!",
    },
    {
      name: "Kunle Adeyemi",
      userName: "@kunle_dev",
      review:
        "I’ve been recommending this library to my team. The documentation is easy to follow!",
    },
    {
      name: "Ngozi Okafor",
      userName: "@ngozi_tech",
      review:
        "Impressive collection of components! They’re lightweight and fit perfectly into any project.",
    },
    {
      name: "Samuel Akpan",
      userName: "@sam_uiux",
      review:
        "This library has redefined how I build UIs. It’s intuitive and visually stunning!",
    },
    {
      name: "Tomiwa Bello",
      userName: "@tomiwa_b",
      review:
        "I’m amazed by how responsive the components are. Works like magic on any screen size.",
    },
  ];

  const twitterReviewsTwo = [
    {
      name: "Grace Amadi",
      userName: "@grace_techie",
      review:
        "The components are sleek and incredibly easy to use. Perfect for any tech stack!",
    },
    {
      name: "David Chukwu",
      userName: "@david_builds",
      review:
        "Fantastic library! It saves a lot of time and fits seamlessly into my workflow.",
    },
    {
      name: "Bukola Ayodele",
      userName: "@bukola_codes",
      review:
        "The library is lightweight yet powerful. The responsiveness is simply amazing!",
    },
    {
      name: "Emeka Ibe",
      userName: "@emeka_dev",
      review:
        "This has quickly become my go-to for building consistent and beautiful UIs.",
    },
    {
      name: "Rita Nwosu",
      userName: "@rita_codes",
      review:
        "Great job on the components! They are intuitive, customizable, and well-documented.",
    },
    {
      name: "Tunde Ojo",
      userName: "@tunde_tech",
      review:
        "I’m impressed by how well these components handle accessibility. A real game-changer!",
    },
    {
      name: "Kemi Adeyanju",
      userName: "@kemi_uiux",
      review:
        "A well-thought-out library. Perfect for modern designs and user-friendly interfaces.",
    },
    {
      name: "Bayo Fasanya",
      userName: "@bayo_js",
      review:
        "These components simplify complex layouts while maintaining performance. Highly recommend!",
    },
  ];
  const TestimoniesCard: React.FC<ReviewProps> = ({
    name,
    userName,
    review,
  }) => {
    return (
      <div className="px-3 py-2 dark:text-gray-300 dark:border-2 dark:border-darkModeColorTwo animate-testimonies flex-shrink-0 flex-grow-0 basis-[65%] lg:basis-[18%] border border-solid min-h-28 rounded-md shadow-lg">
        <div>
          <h2 className="font-nunit font-bold text-sm capitalize">{name}</h2>
          <p className="font-nunit text-gray-500 font-bold text-xs">
            {userName}
          </p>
        </div>
        <p className="mt-2 font-inter font-semibold text-[13px]">{review}</p>
      </div>
    );
  };
  const TestimoniesCardTwo: React.FC<ReviewProps> = ({
    name,
    userName,
    review,
  }) => {
    return (
      <div className="px-3 py-2 dark:text-gray-300 dark:border-2 dark:border-darkModeColorTwo animate-testimoniesecond flex-shrink-0 flex-grow-0 basis-[65%] lg:basis-[18%] border border-solid min-h-28 rounded-md shadow-lg">
        <div>
          <h2 className="font-nunit font-bold text-sm capitalize">{name}</h2>
          <p className="font-nunit text-gray-500 font-bold text-xs">
            {userName}
          </p>
        </div>
        <p className="mt-2 font-inter font-semibold text-[13px]">{review}</p>
      </div>
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
        {twitterReviews.map((values, index) => (
          <TestimoniesCard
            key={index}
            name={values.name}
            review={values.review}
            userName={values.userName}
          />
        ))}
      </div>
      <div className="flex flex-nowrap w-full gap-5 z-10 overflow-hidden">
        {twitterReviewsTwo.map((values, index) => (
          <TestimoniesCardTwo
            key={index}
            name={values.name}
            review={values.review}
            userName={values.userName}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonies;
