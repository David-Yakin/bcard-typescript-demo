import React from "react";
import { Box, IconButton } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUser } from "../../../users/providers/UserProvider";

type CardActionBarProps = { cardId: string; cardUserId: string };

const CardActionBar = ({ cardId, cardUserId }: CardActionBarProps) => {
  const { user } = useUser();

  return (
    <CardActions disableSpacing sx={{ pt: 0, justifyContent: "space-between" }}>
      <Box>
        {user && (user._id === cardUserId || user.isAdmin) && (
          <IconButton
            aria-label="delete card"
            onClick={() => console.log(`you deleted card no: ${cardId}`)}>
            <DeleteIcon />
          </IconButton>
        )}

        {user?._id === cardUserId && (
          <IconButton
            aria-label="edit card"
            onClick={() => console.log(`you edit card no: ${cardId}`)}>
            <EditIcon />
          </IconButton>
        )}
      </Box>

      <Box>
        <IconButton aria-label="call business">
          <CallIcon />
        </IconButton>

        {user && (
          <IconButton
            aria-label="add to fav"
            onClick={() => console.log(`you liked card no: ${cardId}`)}>
            <FavoriteIcon />
          </IconButton>
        )}
      </Box>
    </CardActions>
  );
};

export default React.memo(CardActionBar);
