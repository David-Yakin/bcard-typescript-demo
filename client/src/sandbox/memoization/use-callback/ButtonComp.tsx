import React, { ReactNode } from "react";
import { colorLog } from "../../utils";

type Props = {
  onClick: () => void;
  children: ReactNode;
};
const ButtonComp: React.FC<Props> = ({ onClick, children }) => {
  colorLog(`rendering button ${children}`, "#2d65ff");
  return (
    <button style={{ padding: 3 }} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonComp;
// export default React.memo(ButtonComp);
