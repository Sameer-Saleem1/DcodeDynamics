// App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./LandingPage";
import OrderNow from "./Components/OrderNow/OrderNow";
import Service_Section from "./Components/Service_Section/Service_Section";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/order" element={<OrderNow />} />
          <Route path="/services" element={<Service_Section/>} />
          {/* <Route path="/tech" element={<Technology />} /> */}
          {/* <Route path="/order" element={<Websites />} />
          <Route path="/order" element={<Websites />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
