import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
function Timer({ time, onTimeOut }) {
  const [remainTime, setremainTime] = useState(time);
  useEffect(() => {
    const timer = setTimeout(onTimeOut, time);

    return () => clearTimeout(timer);
  }, [time, onTimeOut]);
  useEffect(() => {
    const timer = setInterval(() => {
      setremainTime((prevtime) => prevtime - 1000);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <ProgressBar now={remainTime} max={time} label={remainTime / 1000} />;
}

export default Timer;
