import React from "react";

type Props = {
  onClick: (x: string) => void;
};

const ChildComp: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      style={{ padding: 8 }}
      onClick={() => onClick("You clicked the Child component!")}>
      Child component
    </button>
  );
};

const RaisingEvents = () => {
  const styles = {
    backgroundColor: "purple",
    color: "white",
    width: "350px",
    height: "350px",
    margin: 8,
  };

  const handleClick = (text: string) => console.log(text);

  return (
    <div style={styles} className="center">
      <div>
        <p>Father component</p>
        <ChildComp onClick={handleClick} />
      </div>
    </div>
  );
};

export default RaisingEvents;
