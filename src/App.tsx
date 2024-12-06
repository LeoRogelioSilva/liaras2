import React from "react";
import "./App.css";
import Carousel from "./Carousel";
import FallingEmojis from "./Falling";
import Timelapse from "./Timelapse";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="carousel">
        <Carousel />
      </div>
      <div>
        <Timelapse />
      </div>
      <FallingEmojis />
    </div>
  );
};

export default App;
