import React, { useState, useEffect } from "react";
import "./App.css";
import Carousel from "./Carousel";

interface TimeDifference {
  value: number;
  label: string;
}

const App: React.FC = () => {
  const [timeDifference, setTimeDifference] = useState({
    years: { value: 0, label: "" },
    months: { value: 0, label: "" },
    days: { value: 0, label: "" },
    hours: { value: 0, label: "" },
    minutes: { value: 0, label: "" },
    seconds: { value: 0, label: "" },
  });

  useEffect(() => {
    const targetDate = new Date("2023-12-12T22:00:00.000Z");

    const calculateDifference = () => {
      const now = new Date();
      const diffInMs = Math.abs(now.getTime() - targetDate.getTime());

      const years = {
        label: "ano",
        value: Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25)),
      };
      const months = {
        label: "mes",
        value: Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30.44)),
      };
      const days = {
        label: "dia",
        value: Math.floor(diffInMs / (1000 * 60 * 60 * 24)),
      };
      const hours = {
        label: "hora",
        value: Math.floor(diffInMs / (1000 * 60 * 60)),
      };
      const minutes = {
        label: "minuto",
        value: Math.floor(diffInMs / (1000 * 60)),
      };
      const seconds = {
        label: "segundo",
        value: Math.floor(diffInMs / 1000),
      };

      setTimeDifference({ years, months, days, hours, minutes, seconds });
    };

    const interval = setInterval(calculateDifference, 1000);

    return () => clearInterval(interval);
  }, []);

  const getLabel = (time: TimeDifference) => {
    return time.value > 1 ? `${time.label}s` : time.label;
  };

  const getValue = (value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="App">
      <Carousel />
      <div>
        <h1>Estamos juntos há:</h1> <br />
        <div className="container">
          {Object.entries(timeDifference).map(
            (key, index) =>
              key[1].value > 1 && (
                <div className="timeCard" key={index}>
                  <p>{`${getValue(key[1].value)} ${getLabel(key[1])}`}</p>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
