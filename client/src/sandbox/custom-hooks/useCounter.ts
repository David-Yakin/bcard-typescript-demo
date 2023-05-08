// import { useState, MouseEvent } from "react";
import { useState } from "react";

const useCounter = (initialCount: number = 0) => {
  const [counter, setCounter] = useState(initialCount);

  // type Event = MouseEvent<HTMLButtonElement>;

  const increment = () => setCounter(prev => prev + 1);

  const decrement = () => setCounter(prev => prev - 1);
  const reset = () => setCounter(initialCount);

  return [counter, increment, decrement, reset];
};

export default useCounter;
