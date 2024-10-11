import React, { useState, useEffect } from "react";

const CountdownTimer = () => {

  const [timeLeft, setTimeLeft] = useState(0); // Time left in seconds
  const [isActive, setIsActive] = useState(false); // Timer active or not
  
  useEffect(() => {
    let timer = null;
    if (isActive && timeLeft > 0) {
      
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false); 
    }
    return () => clearInterval(timer); 
  }, [isActive, timeLeft]);

   const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  

   

  return (
    <div className="timer-container">
      <h2>{formatTime(timeLeft)}</h2>
    </div>
  );
};

export default CountdownTimer;
