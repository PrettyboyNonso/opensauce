import Comingsoon from "./comingsoon/comingsoon";
import ComponentHome from "./Component/componentHome";
import Sidebarprovider from "./context/Sidebarprovider";
import Documentation from "./documentation/Doc";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const savedTheme = sessionStorage.getItem("theme");
    if (savedTheme === null) {
      sessionStorage.setItem("theme", "light");
    } else {
      const html = document.documentElement;
      if (savedTheme === "dark") {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
  }, []);
  return (
    <Sidebarprovider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/components" element={<ComponentHome />} />
          <Route path="/contribute" element={<Comingsoon />} />
        </Routes>
      </Router>
      <Analytics />
      <SpeedInsights />
    </Sidebarprovider>
  );
}

export default App;
