import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

const Logged = () => {
  return (
    <Tooltip title="Open settings">
      <IconButton sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}>
        <Avatar alt="Bird" src="/assets/images/avatar.png" />
      </IconButton>
    </Tooltip>
  );
};

export default Logged;
