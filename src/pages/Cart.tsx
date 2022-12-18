import React from 'react';
import { Box, Button, Checkbox, Divider, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { useCart, formatAud } from '../features/cart';

const Cart = (): JSX.Element => {
  const cartId = '2';
  const { customer, items, discounts, subtotal, totalDiscount, total } = useCart(cartId);

  return (
    <Flex w='100vw' h='100vh' justify='center' align='center'>
      <Flex direction='column' maxW={768} border='1px' gap='16px' padding='16px'>
        <Heading as='h1'>Checkout for {customer}</Heading>
        <Heading size='md'>Your cart (id: {cartId})</Heading>
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
            <Heading as='h3' size='sm'>
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
      </Flex>
    </Flex>
  );
};

export default Cart;
