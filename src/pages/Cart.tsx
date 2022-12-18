import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import { formatAud, CartQueryResponse } from '../features/cart';

interface CartProps {
  cart: CartQueryResponse;
  selectedCartId: string;
}

// TODO: refactor to extract child components
const Cart = ({ cart, selectedCartId }: CartProps): JSX.Element => {
  const { customer, items, discounts, subtotal, totalDiscount, total } = cart;

  return (
      <> 
        <Heading as='h1'>Checkout for {customer}</Heading>
        <Heading size='md'>Your cart (id: {selectedCartId})</Heading>
        {items.map(item => {
          const product = Object.values(item)[0];
          return (
            <div key={product.name}>
              <Heading as='h3' size='sm'>
                {product.quantity}x {product.name}
              </Heading>
              <Text>{product.description}</Text>
              <Text>Price: {formatAud(product.price * product.quantity)}</Text>
            </div>
          );
        })}
        <Divider />
        <Text>Subtotal: {formatAud(subtotal)}</Text>
        {discounts.length > 0 && totalDiscount > 0 && (
          <>
            <Heading as='h3' size='sm' data-testid='discount-section'>
              Discounts applied
            </Heading>
            {discounts.map(discount => (
              <div key={discount.id}>
                <Heading as='h3' size='sm'>
                  {discount.timesApplied}x {discount.id} (-{formatAud(discount.amount)})
                </Heading>
                <Text>{discount.description}</Text>
              </div>
            ))}
            <Text>Total Discount: -{formatAud(totalDiscount)}</Text>
          </>
        )}
        <Heading as='h3' size='sm'>
          Total: {formatAud(total)}
        </Heading>
        <Divider />
        <Box>
          <Checkbox>I agree to the SEEK Advertising Terms & Conditions</Checkbox> (
          <Link>click to read</Link>)
        </Box>
        <Button disabled>Make {formatAud(total)} payment</Button>
      </>
  );
};

export default Cart;
