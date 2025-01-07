import { createRoot } from "react-dom/client";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Main Components/App.jsx";
import Vans from "./Components/Vans/Vans.jsx";
import HostLayout from "./Components/Host/HostLayout/HostLayout.jsx";
import Dashboard from "./Components/Host/Dashboard/Dashboard.jsx";
import Reviews from "./Components/Host/Reviews/Reviews.jsx";
import Income from "./Components/Host/Income/Income.jsx";
import HostVans from "./Components/Host/HostVans/HostVans.jsx";
import VanDetail from "./Components/VanDetail/VanDetail.jsx";
import HostVansDetail from "./Components/Host/HostVans/HostVansDetail.jsx";
import Detail from "./Components/Host/HostLayout/HostVansDetailNav/Detail.jsx";
import Pricing from "./Components/Host/HostLayout/HostVansDetailNav/pricing.jsx";
import Photos from "./Components/Host/HostLayout/HostVansDetailNav/Photos.jsx";
import "./Main Components/server.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />

        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="income" element={<Income />} />
          <Route path="Vans" element={<HostVans />} />

          <Route path="Vans/:id" element={<HostVansDetail />}>
            <Route index element={<Detail />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="photos" element={<Photos />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
