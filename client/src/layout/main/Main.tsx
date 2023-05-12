import React from "react";
import Paper from "@mui/material/Paper";
import { useTheme } from "../../providers/ThemeProvider";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Main: React.FC<Props> = ({ children }) => {
  const { isDark } = useTheme();
  return (
    <Paper
      sx={{
        minHeight: "90vh",
        backgroundColor: !isDark ? "#ffffff" : "#333333",
      }}>
      {children}
    </Paper>
  );
};

export default Main;
