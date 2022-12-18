import { Fetcher } from 'swr';
import { Cart, CartQueryResponse, Discount, LineItem, Offer, ProductCode } from './types';
import {
  carts as mock__carts,
  products as mock__products,
  offers as mock__offers,
} from './mock__data';
import { getDiscounts, getSum, roundToTwo } from './util';

// TODO: refactor and extract more util
// TODO: review variable naming
const createResponse = (cart: Cart): CartQueryResponse => {
  // add nested product/offer details to response
  const items = cart.items.map(item => {
    const productCode = Object.keys(item)[0] as ProductCode;
    const productDetail = mock__products[productCode];
    const quantity = Object.values(item)[0];
    const lineItem: LineItem = {
      [productCode]: {
        ...productDetail,
        quantity,
      },
    };
    return lineItem;
  });

  const availableOffers: Offer[] = cart.offers.map(offer => mock__offers[offer]);
  const discounts: Discount[] = getDiscounts(availableOffers, items);

  const subtotal = getSum(
    items.map(item => Object.values(item)[0].price * Object.values(item)[0].quantity)
  );

  const totalDiscount = getSum(discounts.map(({ amount }) => roundToTwo(amount)));

  const total = subtotal - totalDiscount;

  return {
    customer: cart.customer,
    items,
    discounts,
    subtotal,
    totalDiscount,
    total,
  };
};

const fetcher: Fetcher<CartQueryResponse | undefined, string> = id => {
  const matchId = Object.keys(mock__carts).find(key => key === id);

  if (!matchId) {
    return undefined;
  }

  const response = createResponse(mock__carts[matchId]);

  return response;
};

export default fetcher;
