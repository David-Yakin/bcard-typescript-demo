import axios from "axios";
import CardInterface from "../models/interfaces/CardInterface";
import { NormalizedEditCard } from "../models/types/cardTypes";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const getCards = async () => {
  try {
    const { data } = await axios.get<CardInterface[]>(`${apiUrl}/cards`);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    console.error(error);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getMyCards = async () => {
  try {
    const { data } = await axios.get<CardInterface[]>(
      `${apiUrl}/cards/my-cards`
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getCard = async (cardId: string) => {
  try {
    const { data } = await axios.get<CardInterface>(
      `${apiUrl}/cards/${cardId}`
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const createCard = async (normalizedCard: object) => {
  try {
    const { data } = await axios.post(`${apiUrl}/cards`, normalizedCard);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
  }
};

export const deleteCard = async (cardId: string) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/cards/${cardId}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
  }
};

export const editCard = async (normalizedCard: NormalizedEditCard) => {
  try {
    const cardToServer = { ...normalizedCard };
    delete cardToServer._id;
    const { data } = await axios.put<CardInterface>(
      `${apiUrl}/cards/${normalizedCard._id}`,
      cardToServer
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
  }
};

export const changeLikeStatus = async (cardId: string) => {
  try {
    const { data } = await axios.patch<CardInterface>(
      `${apiUrl}/cards/${cardId}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
  }
};
