import React from "react";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import NavBarLink from "../../../components/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

const LogoIcon = () => {
  return (
    <NavBarLink to={ROUTES.ROOT}>
      <IconButton
        sx={{ display: { xs: "inline-flex", md: "none" } }}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu">
        <Avatar
          alt="Business card icon"
          src="/assets/images/business-card.png"
        />
      </IconButton>
    </NavBarLink>
  );
};

export default LogoIcon;
