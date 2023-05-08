import AddressInterface from "./AddressInterface";
import ImageInterface from "./ImageInterface";

interface CardInterface {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  address: AddressInterface;
  image: ImageInterface;
  bizNumber: number;
  phone: string;
  email: string;
  user_id: string;
  createdAt: Date;
  likes: string[];
  web?: string;
}

export default CardInterface;
