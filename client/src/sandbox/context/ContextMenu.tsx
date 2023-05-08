import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Outlet } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import NavItem from "../../layout/components/NavItem";
import DrawerListItem from "../DrawerListItem";

const ContextMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "inline-flex", md: "none" } }}>
          <ExpandMoreIcon />
        </IconButton>

        <Drawer anchor="top" open={isOpen} onClose={() => setOpen(false)}>
          <List>
            <DrawerListItem
              label="name"
              navigateTo="name"
              onClose={() => setOpen(false)}
            />
            <DrawerListItem
              label="snackbar"
              navigateTo="snack"
              onClose={() => setOpen(false)}
            />
          </List>
        </Drawer>

        <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
          <NavItem label="name" to="name" color="black" />
          <NavItem label="snackbar" to="snack" color="black" />
        </Box>
      </AppBar>

      <Outlet />
    </div>
  );
};

export default ContextMenu;
