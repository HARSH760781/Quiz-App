import React, { useEffect, useState } from "react";

export default function Timer({ setTimeOut, questionNumber }) {
  const [selectedOption, setSelectedOption] = useState(false); // Set to false initially
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setTimeOut(true);

    const interval = setInterval(() => {
      if (!selectedOption && timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, setTimeOut, selectedOption]);

  useEffect(() => {
    setTimer(30);
    setSelectedOption(false);
  }, [questionNumber]);

  // const handleOptionClick = () => {
  //   setSelectedOption(true);
  // };

  return (
    <div>
      <h3>{timer} </h3>
    </div>
  );
}
