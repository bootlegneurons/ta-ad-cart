import { Products, Carts, Offers, ProductCode, OfferCode } from './types';

export const products: Products = {
  [ProductCode.CLASSIC]: {
    name: 'Classic Ad',
    description: 'Offers the most basic level of advertisement',
    price: 269.99,
  },
  [ProductCode.STANDOUT]: {
    name: 'Standout Ad',
    description: 'Allows advertisers to use a company logo and use a longer presentation text',
    price: 322.99,
  },
  [ProductCode.PREMIUM]: {
    name: 'Premium Ad',
    description:
      'Same benefits as StandOut, but also puts the advertisement at the top of the results',
    price: 394.99,
  },
};

export const offers: Offers = {
  [OfferCode.SECONDBITE_3FOR2CLASSIC]: {
    description: '3 for 2 on Classic Ads for SecondByte',
    eligibleProduct: ProductCode.CLASSIC,
    threshold: 3,
    discountAmount: products[ProductCode.CLASSIC].price,
  },
  [OfferCode.AXIL_STANDOUT]: {
    description: 'Discount Standout Ads for Axil',
    eligibleProduct: ProductCode.STANDOUT,
    threshold: 1,
    discountAmount: products[ProductCode.STANDOUT].price - 299.99,
  },
  [OfferCode.MYER_5FOR4STANDOUT]: {
    description: '5 for 4 on Standout Ads for MYER',
    eligibleProduct: ProductCode.STANDOUT,
    threshold: 5,
    discountAmount: products[ProductCode.STANDOUT].price,
  },
  [OfferCode.MYER_PREMIUM]: {
    description: 'Discount Premium Ads for MYER',
    eligibleProduct: ProductCode.PREMIUM,
    threshold: 1,
    discountAmount: products[ProductCode.PREMIUM].price - 389.99,
  },
};

export const carts: Carts = {
  1: {
    customer: 'Guest',
    items: [
      { [ProductCode.CLASSIC]: 1 },
      { [ProductCode.STANDOUT]: 1 },
      { [ProductCode.PREMIUM]: 1 },
    ],
    offers: [],
  },
};
