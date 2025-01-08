import Comingsoon from "./comingsoon/comingsoon";
import ComponentHome from "./Component/componentHome";
import Sidebarprovider from "./context/Sidebarprovider";
import Documentation from "./documentation/Doc";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Analytics } from "@vercel/analytics/react";
function App() {
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
    </Sidebarprovider>
  );
}

export default App;
