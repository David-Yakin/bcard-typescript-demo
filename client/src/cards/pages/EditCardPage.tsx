import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForms/initialCreateCardObject";
import cardSchema from "../models/Joi/cardSchema";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import { useNavigate, Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import mapCardToModel from "../helpers/normalizations/mapCardToModel";
import normalizeCard from "./../helpers/normalizations/normalizeCard";
import CardForm from "../components/CardForm";

const EditCardPage = () => {
  const { user } = useUser();
  const { cardId } = useParams();
  const {
    handleUpdateCard,
    handleGetCard,
    value: { card },
  } = useCards();

  const navigate = useNavigate();

  const { value, ...rest } = useForm(
    initialCardForm,
    cardSchema,
    handleUpdateCard
  );
  const { data, errors } = value;
  const { handleInputChange, handleReset, onSubmit, setData, validateForm } =
    rest;

  useEffect(() => {
    if (cardId)
      handleGetCard(cardId).then(cardFromServer => {
        if (user?._id !== cardFromServer!.user_id) return navigate(ROUTES.ROOT);
        const modeledCard = mapCardToModel(cardFromServer!);
        setData(modeledCard);
      });
  }, []);

  if (!user) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <CardForm
        title="edit card"
        onSubmit={onSubmit}
        onReset={handleReset}
        errors={errors}
        onFormChange={validateForm}
        onInputChange={handleInputChange}
        data={data}
      />
    </Container>
  );
};

export default EditCardPage;
