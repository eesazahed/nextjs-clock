import { NextPage } from "next";
import { useEffect, useState } from "react";

const Clock: NextPage = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  const displayHour = formatTime(time.getHours());
  const displayMin = formatTime(time.getMinutes());
  const displaySec = formatTime(time.getSeconds());

  return (
    <span className="font-bold font-mono">
      {displayHour}
      <span className="text-white animate-blink">:</span>
      {displayMin}
      <span className="text-white animate-blink">:</span>
      {displaySec}
    </span>
  );
};

export default Clock;
