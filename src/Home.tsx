import Flex from "./homecomponent/Flex";
import Footer from "./generalcomponents/Footer";
import Functionality from "./homecomponent/Functionality";
import Header from "./generalcomponents/Header";
import Hero from "./homecomponent/Hero";
import Testimonies from "./homecomponent/Testimonies";
import Users from "./homecomponent/Users";

const Home = () => {
  return (
    <>
      <section className="py-4">
        <Header />
        <Hero />
        <Users />
        <Flex />
        <Functionality />
        <Testimonies />
      </section>
      <Footer />
    </>
  );
};

export default Home;
