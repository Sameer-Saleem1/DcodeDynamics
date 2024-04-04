import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./LandingPage";
import OrderNow from "./Components/OrderNow/OrderNow";
import Technology from "./Components/Technology/Technology";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/order" element={<OrderNow />} />
          <Route path="/tech" element={<Technology />} />
          {/* <Route path="/order" element={<Websites />} />
          <Route path="/order" element={<Websites />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
