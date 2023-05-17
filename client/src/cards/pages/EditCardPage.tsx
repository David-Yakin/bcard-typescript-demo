import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForms/initialCreateCardObject";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import { useNavigate, Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import mapCardToModel from "../helpers/normalizations/mapCardToModel";
import CardForm from "../components/CardForm";
import cardEditSchema from "../models/Joi/cardEditSchema";

const EditCardPage = () => {
  const { user } = useUser();
  const { cardId } = useParams();
  const { handleUpdateCard, handleGetCard } = useCards();

  const navigate = useNavigate();

  const { value, ...rest } = useForm(
    initialCardForm,
    cardEditSchema,
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
