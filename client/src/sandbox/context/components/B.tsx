import React from "react";
import C from "./C";
import { useName } from "../NameProvider";

const B = () => {
  const { name } = useName();
  return (
    <>
      <p>in component B: {name}</p>
      <C />
    </>
  );
};

export default B;
