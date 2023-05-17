import React from "react";

import Typography from "@mui/material/Typography";
import Cards from "./Cards";
import CardInterface from "../models/interfaces/CardInterface";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";

type CardsFeedbackProps = {
  isLoading: boolean;
  error: string | null;
  cards: CardInterface[] | null;
  onDelete?: (id: string) => void;
};

const CardsFeedback: React.FC<CardsFeedbackProps> = ({
  isLoading,
  error,
  cards,
  onDelete = cardId => console.log("you deleted card: " + cardId),
}) => {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && !cards.length)
    return (
      <Typography variant="body1" color="initial">
        Oops, there are no business cards in the database that match the
        parameters you entered!
      </Typography>
    );
  if (cards && cards.length) return <Cards cards={cards} onDelete={onDelete} />;
  return null;
};

export default CardsFeedback;
