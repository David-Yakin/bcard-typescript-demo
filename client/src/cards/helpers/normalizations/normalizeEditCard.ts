import { CardMapToModelType } from "../../models/types/cardTypes";

const normalizeEditCard = (card: CardMapToModelType) => {
  return {
    _id: card._id,
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
    bizNumber: card.bizNumber,
    user_id: card.user_id,
  };
};

export default normalizeEditCard;
