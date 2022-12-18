import { Discount, Offer, LineItem, ProductCode } from './types';

const audFormatter = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' });
export const formatAud = (amount: number): string => audFormatter.format(amount);

export const roundToTwo = (num: number): number => Math.round(num * 100) / 100;

export const getSum = (nums: number[]): number => nums.reduce((subtotal, p) => subtotal + p, 0);

const countEligibleItems = (productCode: ProductCode, items: LineItem[]): number => {
  // find line item match, return 0 if not found
  // return quantity otherwise
  const match = items.find((item) => Object.keys(item)[0] === productCode);
  if (match) {
    return Object.values(match)[0].quantity;
  }
  return 0;
};

export const getDiscounts = (offers: Offer[], items: LineItem[]): Discount[] => {
  return offers.reduce((acc, { id, description, eligibleProduct, threshold, discountAmount }) => {
    // if conditions are met, push a Discount to the accumulator.
    const numEligibleProducts = countEligibleItems(eligibleProduct, items);
    const timesApplied = Math.floor(numEligibleProducts / threshold);
    console.log('%% getDiscounts:', numEligibleProducts, timesApplied);
    if (numEligibleProducts > 0 && timesApplied > 0) {
      acc.push({
        id,
        description,
        timesApplied,
        amount: roundToTwo(timesApplied * discountAmount),
      });
      return acc;
    }

    return acc;
  }, [] as Discount[]);
};
