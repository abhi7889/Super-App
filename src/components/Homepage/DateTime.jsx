import React, { useState, useEffect } from "react";
import "./homepage.css";

function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="date-time">
      {currentDateTime.toLocaleDateString()}&nbsp;&nbsp;&nbsp;&nbsp;{currentDateTime.toLocaleTimeString()}
    </div>
  );
}

export default DateTimeDisplay;
