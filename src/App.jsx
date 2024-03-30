import React from "react";
import Hero from "./Components/Hero/Hero";
import Ourteam from "./Components/OurTeam/Ourteam";
import "./App.css";
import Servicecard from "./Components/Services/Servicecard";
const App = () => {
  return (
    <div>
      <Hero></Hero>
      <Ourteam></Ourteam>
      <Servicecard />
    </div>
  );
};

export default App;
