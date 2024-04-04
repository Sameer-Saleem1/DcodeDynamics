import React from "react";
import Tools from "./Components/Tools/Tools";
import Websites from "./Components/Websites/Websites";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Ourteam from "./Components/OurTeam/Ourteam";
import "./App.css";
import Servicecard from "./Components/Services/Servicecard";


function LandingPage() {
  return (
    <div>
      <Hero></Hero>
      <Tools />
      <Servicecard />
      <Ourteam></Ourteam>
      <Websites />
      <Footer />
    </div>
  );
}

export default LandingPage;
