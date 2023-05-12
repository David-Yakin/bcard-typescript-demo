import React from "react";
import Box from "@mui/material/Box";
import Logo from "../Logo/Logo";
import LogoIcon from "../Logo/LogoIcon";
import NavItem from "../../../components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";

const LeftNavBar = () => {
  const { user } = useUser();

  return (
    <Box>
      <LogoIcon />
      <Logo />

      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <NavItem to={ROUTES.ABOUT} label="about" />
        {user && <NavItem to={ROUTES.FAV_CARDS} label="fav cards" />}
        {user && user.isBusiness && (
          <NavItem to={ROUTES.MY_CARDS} label="my cards" />
        )}

        {user && user.isAdmin && (
          <NavItem to={ROUTES.SANDBOX} label="sandbox" />
        )}
      </Box>
    </Box>
  );
};

export default LeftNavBar;
