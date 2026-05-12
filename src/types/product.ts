export type ProductGender = "masculino" | "feminino" | "infantil" | "unissex";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  club: string;
  league: string;
  gender: ProductGender;
  oldPrice: number;
  price: number;
  discount: number;
  installments: string;
  freeShipping: boolean;
  sizes: string[];
  customizable: boolean;
  readyToShip: boolean;
  images: string[];
  description: string;
  tags: string[];
  related: string[];
  colors: string[];
};

export type Personalization = {
  enabled: boolean;
  name?: string;
  number?: string;
};

export type CartItem = {
  lineId: string;
  product: Product;
  size: string;
  personalization: Personalization;
  quantity: number;
};
