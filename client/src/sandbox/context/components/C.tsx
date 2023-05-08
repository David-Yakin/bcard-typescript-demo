import React from "react";
import { useName } from "../NameProvider";

const C = () => {
  const { name, setName } = useName();

  return (
    <>
      <div>in component C: {name}</div>
      <input type="text" onChange={e => setName(e.target.value)} />
    </>
  );
};

export default C;
