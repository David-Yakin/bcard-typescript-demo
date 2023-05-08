import { useState, MouseEvent } from "react";

const UseStateWithFunction = () => {
  const [counter, setCounter] = useState(0);

  type Term = MouseEvent<HTMLButtonElement> | string;

  const changeNumber = (term: Term = "") => {
    if (term === "increment") return setCounter(prev => prev + 1);
    if (term === "decrement") return setCounter(prev => prev - 1);
    setCounter(0);
  };

  return (
    <div style={{ padding: 16 }}>
      <p>{counter}</p>
      <button
        style={{ padding: 2, margin: 1 }}
        onClick={() => changeNumber("increment")}>
        +
      </button>
      <button
        style={{ padding: 2, margin: 1 }}
        onClick={() => changeNumber("decrement")}>
        -
      </button>

      <button style={{ padding: 2, margin: 1 }} onClick={changeNumber}>
        reset
      </button>
    </div>
  );
};

export default UseStateWithFunction;
