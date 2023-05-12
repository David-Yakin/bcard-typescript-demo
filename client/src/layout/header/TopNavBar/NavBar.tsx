import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import LeftNavBar from "./left-navigation/LeftNavBar";
import RightNavBar from "./right-navigation/RightNavBar";
import SearchBar from "./search-bar/SearchBar";
import { MenuProvider } from "./menu/MenuProvider";
import Container from "@mui/material/Container";

export const NavBar = () => {
  return (
    <MenuProvider>
      <AppBar position="sticky">
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 1,
              alignItems: "center",
            }}>
            <LeftNavBar />

            <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
              <SearchBar />
            </Box>

            <RightNavBar />
          </Box>
        </Container>
      </AppBar>
    </MenuProvider>
  );
};
