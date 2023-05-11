export type AddressType = {
  state?: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
};

export type ImageType = { url?: string; alt?: string };

export type UserNameType = { first: string; middle?: string; last: string };

type UserType = {
  name: UserNameType;
  phone: string;
  email: string;
  password: string;
  isBusiness: boolean;
  image: ImageType;
  address: AddressType;
};

export type TokenType = { _id: string; isBusiness: boolean; isAdmin: boolean };

export type Login = Pick<UserType, "email" | "password">;

export default UserType;
