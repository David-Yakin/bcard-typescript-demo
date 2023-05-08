import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { useSnack } from "../../providers/SnackbarProvider";

const SnackExample = () => {
  const snack = useSnack();
  const [message, setMessage] = useState("");

  const fireSnack = () => {
    snack("success", message);
    setMessage("");
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 350,
      }}>
      <InputBase
        onChange={e => setMessage(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter Snack Message"
        inputProps={{ "aria-label": "search google maps" }}
        value={message}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        onClick={fireSnack}
        color="primary"
        sx={{ p: "10px" }}
        aria-label="directions">
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default SnackExample;
