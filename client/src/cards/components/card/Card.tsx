import React from "react";
import MuiCard from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import CardInterface from "../../models/interfaces/CardInterface";

type CardProps = {
  card: CardInterface;
  onDelete: (id: string) => void;
  onLike: () => void;
};

const Card: React.FC<CardProps> = ({ card, onDelete, onLike }) => {
  const navigate = useNavigate();

  return (
    <MuiCard sx={{ minWidth: 280 }} elevation={4}>
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_DETAILS}/${card._id}`)}>
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>

      <CardActionBar card={card} onDelete={onDelete} onLike={onLike} />
    </MuiCard>
  );
};

export default Card;
