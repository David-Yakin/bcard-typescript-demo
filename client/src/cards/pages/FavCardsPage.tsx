import React, { useEffect, useCallback } from "react";
import useCards from "../hooks/useCards";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";

const FavCardsPage = () => {
  const { value, handleDeleteCard, handleGetFavCards } = useCards();
  const { isLoading, error, cards } = value;

  useEffect(() => {
    handleGetFavCards();
  }, []);

  const onDeleteCard = useCallback(async (cardId: string) => {
    await handleDeleteCard(cardId);
    await handleGetFavCards();
  }, []);

  const changeLikeStatus = useCallback(async () => {
    await handleGetFavCards();
  }, []);

  return (
    <Container>
      <PageHeader
        title="Favorite Cards Page"
        subtitle="Here you can find all your favorite business cards"
      />

      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={cards}
        onDelete={onDeleteCard}
        onLike={changeLikeStatus}
      />
    </Container>
  );
};

export default FavCardsPage;
