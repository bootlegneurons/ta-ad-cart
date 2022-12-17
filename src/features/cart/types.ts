export enum ProductCode {
  CLASSIC = 'CLASSIC',
  STANDOUT = 'STANDOUT',
  PREMIUM = 'PREMIUM',
}

interface Product {
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

interface Offer {
  eligibleProduct: ProductCode;
  threshold: 1 | 2 | 3 | 4 | 5;
  discountAmount: number;
}
export type Offers = Record<OfferCode, Offer>;

interface Cart {
  customer: string;
  items: ProductCode[];
  offers: Offer[];
};
export type Carts = Record<number, Cart>;
