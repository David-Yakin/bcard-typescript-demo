import React from "react";
import Grid from "@mui/material/Grid";
import Card from "./card/Card";
import CardInterface from "../models/interfaces/CardInterface";

type CardsProps = {
  cards: CardInterface[];
  onDelete: (id: string) => void;
  onLike: () => void;
};

const Cards: React.FC<CardsProps> = ({ cards, onDelete, onLike }) => {
  return (
    <Grid container spacing={2} pb={2}>
      {cards.map(card => (
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
          <Card card={card} onDelete={onDelete} onLike={onLike} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
