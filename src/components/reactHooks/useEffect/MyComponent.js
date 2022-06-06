import { useEffect, useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const tick = () => {
    console.log("Clock ticking");
    setDate(new Date());
  };

  const addClick = () => {
    setCount((prevState) => prevState + 1);
  };

  useEffect(() => {
    console.log("Inside useEffect() now: Updating doc title");
    document.title = `Clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log("Starting timer.");
    const interval = setInterval(tick, 1000);

    // perform cleanup - stop timer
    return () => {
      console.log("Component unmounted.");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>

      <p>
        <button type="button" onClick={addClick}>
          Click
        </button>
      </p>
    </div>
  );
}
