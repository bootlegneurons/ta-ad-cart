import useSWR from 'swr';
import mock__fetcher from './mock__fetcher';
import { CartQueryResponse } from './types';

const DEFAULT_STATE: CartQueryResponse = {
  customer: '',
  items: [],
  discounts: [],
  subtotal: 0,
  totalDiscount: 0,
  total: 0,
};

const useCart = (cartId: string): CartQueryResponse => {
  const { data, error } = useSWR(['cart', cartId], ([, cartId]) => mock__fetcher(cartId));

  if (error || !data) {
    // return fallback data in case there's no data for provided cartId, or while loading
    return DEFAULT_STATE;
  }

  return data;
};

export default useCart;
