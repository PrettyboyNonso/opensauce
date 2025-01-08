import Footer from "../generalcomponents/Footer";
import Header from "../generalcomponents/Header";

const Comingsoon = () => {
  return (
    <>
      <Header />
      <section className=" mt-16 h-96 flex flex-col justify-center items-center">
        <h1 className="font-inter text-3xl capitalize font-black text-primary text-center">
          coming soon...
        </h1>
        <p className="mt-3 font-nunit font-semibold  text-sm">
          We're working hard to bring something exciting. Stay tuned!
        </p>
      </section>
      <Footer />
    </>
  );
};

export default Comingsoon;
