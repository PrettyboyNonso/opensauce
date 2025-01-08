import useSidebar from "../context/useSidebar";
import Sidebar from "../documentation/Sidebar";
import Footer from "../generalcomponents/Footer";
import Header from "../generalcomponents/Header";
import DateComponent from "./ui/Date";

const ComponentHome = () => {
  const { sidebar, setSidebar } = useSidebar();
  return (
    <>
      <Header />
      <section className="py-4">
        <div className="flex min-h-96">
          <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
          <DateComponent />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ComponentHome;
