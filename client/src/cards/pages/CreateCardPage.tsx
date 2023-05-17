import React from "react";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import initialCreateCardObject from "../helpers/initialForms/initialCreateCardObject";
import cardSchema from "../models/Joi/cardSchema";
import Container from "@mui/material/Container";
import CardForm from "../components/CardForm";

const CreateCardPage = () => {
  const { handleCreateCard } = useCards();
  const { user } = useUser();
  const { value, ...rest } = useForm(
    initialCreateCardObject,
    cardSchema,
    handleCreateCard
  );
  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, validateForm } = rest;

  if (!user || !user.isBusiness) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Container>
      <CardForm
        title="create business card"
        data={data}
        errors={errors}
        onFormChange={validateForm}
        onInputChange={handleInputChange}
        onReset={handleReset}
        onSubmit={onSubmit}
      />
    </Container>
  );
};

export default CreateCardPage;
