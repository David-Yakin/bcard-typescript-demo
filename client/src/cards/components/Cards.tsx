import React from "react";
import Grid from "@mui/material/Grid";
import Card from "./card/Card";
import CardInterface from "../interfaces/CardInterface";

type CardsProps = {
  cards: CardInterface[];
};

const Cards: React.FC<CardsProps> = ({ cards }) => {
  return (
    <Grid container spacing={2} pb={2}>
      {cards.map(card => (
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
          <Card card={card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
