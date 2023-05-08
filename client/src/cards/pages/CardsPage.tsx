import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import CardsFeedback from "../components/CardsFeedback";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";

type CardsPageProps = {};

const CardsPage: React.FC<CardsPageProps> = () => {
  const { value, handleGetCards } = useCards();
  const { cards, error, isLoading } = value;

  useEffect(() => {
    handleGetCards();
  }, []);

  return (
    <Container>
      <PageHeader
        title="Cards Page"
        subtitle="On this page you can find all business cards form all categories"
      />
      <CardsFeedback cards={cards} error={error} isLoading={isLoading} />
    </Container>
  );
};

export default CardsPage;
