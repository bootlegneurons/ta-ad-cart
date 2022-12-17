import { Fetcher } from 'swr';
import { Cart, CartQueryResponse, LineItem, Offer, ProductCode } from './types';
import { carts as mock__carts, products as mock__products, offers as mock__offers } from './mock__data';

const createResponse = (cart: Cart): CartQueryResponse => {
  // add nested product/offer details to response
  const items = cart.items.map(item => {
    const productCode = Object.keys(item)[0] as ProductCode;
    const productDetail = mock__products[productCode];
    const quantity = Object.values(item)[0];
    const lineItem: LineItem = { [productCode]: {
      ...productDetail,
      quantity
    }};
    return lineItem;
  });

  const offers: Offer[] = cart.offers.map(offer => mock__offers[offer]);

  // TODO: calculate subtotal, discount, total

  return {
    customer: cart.customer,
    items,
    offers,
    // TODO: calculate these values
    subtotal: 100,
    discount: 0,
    total: 100,
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
