import React from "react";
import MuiCard from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import CardInterface from "../../interfaces/CardInterface";

type CardProps = {
  card: CardInterface;
};

const Card: React.FC<CardProps> = ({ card }) => {
  const navigate = useNavigate();

  return (
    <MuiCard sx={{ minWidth: 280 }}>
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_DETAILS}/${card._id}`)}>
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>

      <CardActionBar cardId={card._id} cardUserId={card.user_id} />
    </MuiCard>
  );
};

export default Card;
