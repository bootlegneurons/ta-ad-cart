import { countEligibleItems, getDiscounts } from './util';
import { LineItem, Offer, OfferCode, ProductCode } from './types';

const mock__offers: Offer[] = [{
  id: OfferCode.SECONDBITE_3FOR2CLASSIC,
  description: '3 for 2 on Classic Ads for SecondByte',
  eligibleProduct: ProductCode.CLASSIC,
  threshold: 3,
  discountAmount: 100,
}];

const mock__lineItems: LineItem[] = [{
  [ProductCode.CLASSIC]: {
    name: 'Classic Ad',
    description: 'Offers the most basic level of advertisement',
    price: 269.99,
    quantity: 3,
  },
}];

test('countEligibleItems: correctly count eligible items', () => {
  const result = countEligibleItems(ProductCode.CLASSIC, mock__lineItems);
  expect(result).toEqual(3);
});

test('countEligibleItems: ignores ineligible items', () => {
  const result = countEligibleItems(ProductCode.STANDOUT, mock__lineItems);
  expect(result).toEqual(0);
});

test('getDiscounts: returns empty array if no offers', () => {
  const result = getDiscounts([] as Offer[], mock__lineItems);
  expect(result.length).toEqual(0);
});

test('getDiscounts: returns details of discount when conditions are met', () => {
  const result = getDiscounts(mock__offers, mock__lineItems);
  expect(result.length).toEqual(1);
});

// TODO: additional tests
// test('getDiscounts: returns empty array if eligibility criteria are not met', () => {});
// test('getDiscounts: returns correct timesApplied when multiple applications', () => {});
// ... and additional cases for formatAud, roundToTwo, getSum.
