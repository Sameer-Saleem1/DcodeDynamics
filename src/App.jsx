import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NaVbar from "./NaVbar/NaVbar";
import LandingPage from "./LandingPage";
import OrderNow from "./Components/OrderNow/OrderNow";
import Technology from "./Components/Technology/Technology";
import Footer from "./Components/Footer/Footer";
import Team from "./Components/Team/Team";
import "./App.css";

import Service_Section from "./Components/Service_Section/Service_Section";

const App = () => {
  return (
    <div>
      <Router>
        <NaVbar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/order" element={<OrderNow />} />
          <Route path="/tech" element={<Technology />} />
          <Route path="/services" element={<Service_Section />} />
          <Route path="/team" element={<Team />} />
          {/* <Route path="/order" element={<Websites />} />
          <Route path="/order" element={<Websites />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
