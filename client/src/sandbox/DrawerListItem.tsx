import React from "react";
import ListItem from "@mui/material/ListItem";
import NavItem from "../layout/components/NavItem";

type Props = {
  label: string;
  navigateTo: string;
  onClose: () => void;
  divider?: boolean;
};

const DrawerListItem: React.FC<Props> = ({
  label,
  navigateTo,
  onClose,
  divider = true,
}) => {
  return (
    <ListItem
      divider={divider}
      disablePadding
      onClick={onClose}
      sx={{ justifyContent: "center" }}>
      <NavItem label={label} to={navigateTo} color="black" />
    </ListItem>
  );
};

export default DrawerListItem;
