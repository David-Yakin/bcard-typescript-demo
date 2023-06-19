import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUser } from "../../../users/providers/UserProvider";
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import useCards from "../../hooks/useCards";
import CardInterface from "../../models/interfaces/CardInterface";

type CardActionBarProps = {
  card: CardInterface;
  onDelete: (id: string) => void;
  onLike: () => void;
};

const CardActionBar = ({ card, onDelete, onLike }: CardActionBarProps) => {
  const { _id, user_id, likes } = card;
  const navigate = useNavigate();
  const { user } = useUser();
  const { handleLikeCard } = useCards();

  const [isDialogOpen, setDialog] = useState(false);

  const [isLiked, setLike] = useState(() => {
    if (!user) return false;
    return !!likes.find(id => id === user._id);
  });

  const handleDialog = (term?: string) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleLike = async () => {
    setLike(prev => !prev);
    await handleLikeCard(_id);
    onLike();
  };

  const handleDeleteCard = () => {
    handleDialog();
    onDelete(_id);
  };

  return (
    <>
      <CardActions
        disableSpacing
        sx={{ pt: 0, justifyContent: "space-between" }}>
        <Box>
          {user && (user._id === user_id || user.isAdmin) && (
            <IconButton
              aria-label="delete card"
              onClick={() => handleDialog("open")}>
              <DeleteIcon />
            </IconButton>
          )}

          {user?._id === user_id && (
            <IconButton
              aria-label="edit card"
              onClick={() => navigate(`${ROUTES.EDIT_CARD}/${_id}`)}>
              <EditIcon />
            </IconButton>
          )}
        </Box>

        <Box>
          <IconButton aria-label="call business">
            <CallIcon />
          </IconButton>

          {user && (
            <IconButton aria-label="add to fav" onClick={handleLike}>
              <FavoriteIcon color={isLiked ? "error" : "inherit"} />
            </IconButton>
          )}
        </Box>
      </CardActions>

      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={handleDeleteCard}
      />
    </>
  );
};

export default React.memo(CardActionBar);
