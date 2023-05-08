import { useCallback, useState, useMemo } from "react";
import { createCard, getCards, getMyCards } from "../services/cardApiService";
import useAxios from "../../hooks/useAxios";
// import normalizeCard from "./../helpers/normalization/normalizeCard";
import { useNavigate } from "react-router-dom";
import { useSnack } from "../../providers/SnackbarProvider";
import ROUTES from "../../routes/routesModel";
import CardInterface from "../interfaces/CardInterface";

type CardsType = null | CardInterface[];
type ErrorType = null | string;

const useCards = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [cards, setCards] = useState<CardsType>(null);
  const [card, setCard] = useState<null | CardInterface>(null);

  useAxios();
  const navigate = useNavigate();
  const snack = useSnack();

  const requestStatus = (
    loading: boolean,
    errorMessage: ErrorType,
    cards: CardsType,
    card = null
  ) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleGetCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
    } catch (error) {
      if (typeof error === "string") return requestStatus(false, error, null);
    }
  }, []);

  const handleGetMyCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      if (typeof error === "string") return requestStatus(false, error, null);
    }
  }, []);

  // const handleCreateCard = useCallback(async cardFromClient => {
  //   try {
  //     setLoading(true);
  //     const normalizedCard = normalizeCard(cardFromClient);
  //     const card = await createCard(normalizedCard);
  //     requestStatus(false, null, null, card);
  //     snack("success", "A new business card has been created");
  //     navigate(ROUTES.MY_CARDS);
  //   } catch (error) {
  //     if (typeof error === "string") return requestStatus(false, error, null);
  //   }
  // }, []);

  const value = useMemo(() => {
    return { isLoading, cards, card, error };
  }, [isLoading, cards, card, error]);

  return { value, handleGetCards, handleGetMyCards };
};

export default useCards;
