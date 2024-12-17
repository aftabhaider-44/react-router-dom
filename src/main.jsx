import { createRoot } from "react-dom/client";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
