export type AddressType = {
  state?: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
};

export type ImageType = { url?: string; alt?: string };

export type CardFromClientType = {
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  webUrl: string;
  imageUrl: string;
  imageAlt: string;
  state: string;
  country: string;
  city: string;
  street: string;
  houseNumber: string;
  zip: string;
};

export type CreateCardErrors = Partial<CardFromClientType>;
