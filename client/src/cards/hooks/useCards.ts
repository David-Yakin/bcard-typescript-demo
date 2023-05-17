import { useCallback, useState, useMemo } from "react";
import {
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardApiService";
import useAxios from "../../hooks/useAxios";
// import normalizeCard from "./../helpers/normalization/normalizeCard";
import { useNavigate } from "react-router-dom";
import { useSnack } from "../../providers/SnackbarProvider";
import ROUTES from "../../routes/routesModel";
import CardInterface from "../models/interfaces/CardInterface";
import normalizeCard from "../helpers/normalizations/normalizeCard";
import { CardFromClientType } from "../models/types/cardTypes";

type CardsType = null | CardInterface[];
type CardType = null | CardInterface;
type ErrorType = null | string;

const useCards = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [cards, setCards] = useState<CardsType>(null);
  const [card, setCard] = useState<CardType>(null);

  useAxios();

  const navigate = useNavigate();
  const snack = useSnack();

  const requestStatus = (
    loading: boolean,
    errorMessage: ErrorType,
    cards: CardsType,
    card: CardType = null
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

  const handleGetCard = async (cardId: string) => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
      return card;
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  const handleCreateCard = useCallback(
    async (cardFromClient: CardFromClientType) => {
      try {
        setLoading(true);
        const normalizedCard = normalizeCard(cardFromClient);
        const card = await createCard(normalizedCard);
        requestStatus(false, null, null, card);
        snack("success", "A new business card has been created");
        navigate(ROUTES.MY_CARDS);
      } catch (error) {
        if (typeof error === "string") return requestStatus(false, error, null);
      }
    },
    []
  );

  const handleDeleteCard = useCallback(async (cardId: string) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      snack("success", "The business card has been successfully deleted");
    } catch (error) {
      if (typeof error === "string") return requestStatus(false, error, null);
    }
  }, []);

  const handleUpdateCard = useCallback(
    async (cardFromClient: CardFromClientType) => {
      try {
        setLoading(true);
        const normalizedCard = normalizeCard(cardFromClient);
        const cardToServer = {
          ...normalizedCard,
          bizNumber: card!.bizNumber,
          user_id: card!.user_id,
        };
        const cardFomServer = await editCard(card!._id, cardToServer);
        requestStatus(false, null, null, cardFomServer);
        snack("success", "The business card has been successfully updated");
        navigate(ROUTES.MY_CARDS);
      } catch (error) {
        if (typeof error === "string") return requestStatus(false, error, null);
      }
    },
    []
  );

  const value = useMemo(() => {
    return { isLoading, cards, card, error };
  }, [isLoading, cards, card, error]);

  return {
    value,
    handleGetCards,
    handleGetMyCards,
    handleGetCard,
    handleCreateCard,
    handleDeleteCard,
    handleUpdateCard,
  };
};

export default useCards;
