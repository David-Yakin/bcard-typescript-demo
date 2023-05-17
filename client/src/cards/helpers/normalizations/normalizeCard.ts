import CardInterface from "../../models/interfaces/CardInterface";
import { CardFromClientType } from "../../models/types/cardTypes";

type CardOptions = {
  cardId?: string;
  bizNumber?: number;
  user_id?: string;
  createdAt?: Date;
  likes?: string[];
};

const normalizeCard = (card: CardFromClientType, options?: CardOptions) => {
  return {
    _id: options ? options.cardId : undefined,
    title: card.title,
    subtitle: card.subtitle,
    description: card.description,
    phone: card.phone,
    email: card.email,
    web: card.webUrl,
    image: {
      url: card.imageUrl,
      alt: card.imageAlt,
    },
    address: {
      state: card.state,
      country: card.country,
      city: card.city,
      street: card.street,
      houseNumber: +card.houseNumber,
      zip: +card.zip,
    },
    // bizNumber: options ? options.bizNumber : undefined,
    // user_id: options ? options.user_id : undefined,
    // createdAt: options ? options.createdAt : undefined,
    // likes: options ? options.likes : undefined,
  };
};

export default normalizeCard;
