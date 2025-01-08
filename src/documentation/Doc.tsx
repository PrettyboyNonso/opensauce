import useSidebar from "../context/useSidebar";
import Footer from "../generalcomponents/Footer";
import Header from "../generalcomponents/Header";
import Installation from "./Installation";
import Introduction from "./Introduction";
import Sidebar from "./Sidebar";

const Documentation = () => {
  const { sidebar, setSidebar } = useSidebar();
  return (
    <>
      <Header />
      <section className="py-4">
        <div className="flex min-h-96">
          <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
          {sidebar === "introduction" ? (
            <Introduction />
          ) : sidebar === "installation" ? (
            <Installation />
          ) : null}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Documentation;
