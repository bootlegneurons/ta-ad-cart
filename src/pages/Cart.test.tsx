import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from './Cart';
import { CartQueryResponse, ProductCode, OfferCode } from '../features/cart';

const mock__cart: CartQueryResponse = {
  customer: 'SecondByte',
  items: [
    {
      [ProductCode.CLASSIC]: {
        name: 'Classic Ad',
        description: 'Offers the most basic level of advertisement',
        price: 269.99,
        quantity: 3,
      },
      [ProductCode.PREMIUM]: {
        name: 'Premium Ad',
        description:
          'Same benefits as StandOut, but also puts the advertisement at the top of the results',
        price: 394.99,
        quantity: 1,
      },
    },
  ],
  discounts: [
    {
      id: OfferCode.SECONDBITE_3FOR2CLASSIC,
      description: '3 for 2 on Classic Ads for SecondByte',
      timesApplied: 1,
      amount: 269.99,
    },
  ],
  subtotal: 100,
  totalDiscount: 50,
  total: 50,
};
const mock__cartNoDiscount: CartQueryResponse = {
  customer: 'Guest',
  items: [
    {
      [ProductCode.CLASSIC]: {
        name: 'Classic Ad',
        description: 'Offers the most basic level of advertisement',
        price: 269.99,
        quantity: 1,
      },
    },
  ],
  discounts: [],
  subtotal: 100,
  totalDiscount: 0,
  total: 100,
};

test('When no discounts, ensure discount part of cart is not rendered', () => {
  render(<Cart cart={mock__cartNoDiscount} selectedCartId="1" />);
  const discountSection = screen.queryByTestId('discount-section');

  expect(discountSection).toBeNull();
});
test('When discounts, render their details', () => {
  render(<Cart cart={mock__cart} selectedCartId="2" />);
  const discountSection = screen.queryByTestId('discount-section');

  expect(discountSection).not.toBeNull();
});
// TODO: additional tests, e.g.:
// test: Correct subtotal, discount and total values displayed
// test: correct details of discounts displayed