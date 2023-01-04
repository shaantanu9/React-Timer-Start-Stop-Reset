import { useState, memo, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(1);
  const [stop, setStop] = useState(null);
  var counterTimer;

  useEffect(() => {
    if (stop == false) {
      counterTimer = setInterval(() => setCounter((pre) => pre + 1), 1000);
    }

    return () => clearInterval(counterTimer);
  });

  const submitHandler = () => setStop(false);

  const resetHandler = () => {
    setCounter(1);
    setStop(true);
  };
  const stopHandler = () => {
    setStop(true);
  };

  return (
    <>
      <p>{counter}</p>

      <button onClick={submitHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
      <button onClick={resetHandler}>Reset</button>
    </>
  );
}

export default memo(Counter);
