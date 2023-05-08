import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "./../../components/PageHeader";
import { useParams } from "react-router-dom";

const CardDetailsPage = () => {
  const { cardId } = useParams();
  return (
    <Container>
      <PageHeader
        title="Business Details"
        subtitle="Here you can see details of the business"
      />
      <div>Details of card: {cardId}</div>
    </Container>
  );
};

export default CardDetailsPage;
