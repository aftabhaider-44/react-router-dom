import { createRoot } from "react-dom/client";
import Home from "../Components/Home/Home.jsx";
import About from "../Components/About/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Vans from "../Components/Vans/Vans.jsx";
import Host from "../Components/Host/HostLayout/HostLayout.jsx";
import Dashboard from "../Components/Host/Dashboard/Dashboard.jsx";
import Reviews from "../Components/Host/Reviews/Reviews.jsx";
import Income from "../Components/Host/Income/Income.jsx";
import VanDetail from "../Components/VanDetail/VanDetail.jsx";
import "./server.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
        <Route path="/host" element={<Host />}>
          <Route index element={<Dashboard />} />
          <Route path="/host/reviews" element={<Reviews />} />
          <Route path="/host/income" element={<Income />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
