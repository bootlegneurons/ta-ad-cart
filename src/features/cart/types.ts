type Quantity = 1 | 2 | 3 | 4 | 5;

export enum ProductCode {
  CLASSIC = 'CLASSIC',
  STANDOUT = 'STANDOUT',
  PREMIUM = 'PREMIUM',
}

export type LineItem = { [k in ProductCode]?: Product & { quantity: Quantity } };

export interface Product {
  name: string;
  description: string;
  price: number;
}

export type Products = Record<ProductCode, Product>;

export enum OfferCode {
  SECONDBITE_3FOR2CLASSIC = 'SECONDBITE_3FOR2CLASSIC',
  AXIL_STANDOUT = 'AXIL_STANDOUT',
  MYER_5FOR4STANDOUT = 'MYER_5FOR4STANDOUT',
  MYER_PREMIUM = 'MYER_PREMIUM',
}

export interface Offer {
  description: string;
  eligibleProduct: ProductCode;
  threshold: Quantity;
  discountAmount: number;
}
export type Offers = Record<OfferCode, Offer>;

export interface Cart {
  customer: string;
  items: { [k in ProductCode]?: Quantity }[];
  offers: OfferCode[];
};
export type Carts = Record<string, Cart>;

export interface CartQueryResponse {
  customer: string;
  items: LineItem[];
  offers: Offer[];
  subtotal: number;
  discount: number;
  total: number;
}
