import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const handleStart = () => {
    setStart((start) => !start);
  };

  useEffect(() => {
    if (start) {
      const d = setInterval(() => {
        if (time < 5000) {
          setTime((time) => time + 1);
        }
      }, 10);
    }
  }, []);

  return (
    <>
      <button onClick={handleStart} style={{ padding: "1rem", color: "blue" }}>
        start
      </button>
      <button style={{ padding: "1rem", color: "blue" }}>{time}</button>
    </>
  );
};
export default Timer;
