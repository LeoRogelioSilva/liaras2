import React, { useState, useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  const [timeDifference, setTimeDifference] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2023-11-08T20:00:00.000Z");

    const calculateDifference = () => {
      const now = new Date();
      const diffInMs = Math.abs(now.getTime() - targetDate.getTime());

      const years = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diffInMs / (1000 * 60 * 60));
      const minutes = Math.floor(diffInMs / (1000 * 60));
      const seconds = Math.floor(diffInMs / 1000);

      setTimeDifference({ years, months, days, hours, minutes, seconds });
    };

    const interval = setInterval(calculateDifference, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Estamos juntos há:</h1>
      <p className="clock">{timeDifference.years} anos</p>
      <p> {timeDifference.months} meses</p>
      <p> {timeDifference.days} dias</p>
      <p> {timeDifference.hours} horas</p>
      <p> {timeDifference.minutes} minutos</p>
      <p> {timeDifference.seconds} segundos.</p>
    </div>
  );
};

export default App;
