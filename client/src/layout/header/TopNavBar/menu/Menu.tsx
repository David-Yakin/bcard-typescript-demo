import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
// import ROUTES from "../../../../routes/routesModel";
// import { useUser } from "../../../../users/providers/UserProvider";
// import useUsers from "../../../../users/hooks/useUsers";
import MenuLink from "./MenuLink";

type Props = {
  isOpen: boolean;
  anchorEl: HTMLElement;
  onClose: () => void;
};

const Menu: React.FC<Props> = ({ isOpen, anchorEl, onClose }) => {
  const user = true;
  // const user = false

  // const { user } = useUser();
  // const { handleLogout } = useUsers();

  const onLogout = () => {
    //   handleLogout();
    //   onClose();
  };

  return (
    <MuiMenu
      open={isOpen}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}>
      <Box>
        <MenuLink
          label="about"
          navigateTo={""}
          onClick={onClose}
          styles={{ display: { xs: "block", md: "none" } }}
        />

        {!user && (
          <>
            <MenuLink
              label="login"
              navigateTo={""}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
            <MenuLink
              label="signup"
              navigateTo={""}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
          </>
        )}
        {user && (
          <>
            <MenuLink label="profile" navigateTo={""} onClick={onClose} />
            <MenuLink label="edit account" navigateTo={""} onClick={onClose} />

            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </>
        )}
      </Box>
    </MuiMenu>
  );
};

export default Menu;
