import { Box, Button, Checkbox, Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';
import useCart from '../features/cart/useCart';

const Cart = (): JSX.Element => {
  const cartId = '1';
  const { customer, items, offers, subtotal, discount, total } = useCart(cartId);

  return (
    <Flex w='100vw' h='100vh' justify='center' align='center'>
      <Flex direction='column' maxW={768} border='1px' gap='16px' padding='16px'>
        <Heading as='h1'>Checkout for {customer}</Heading>
        <Text>Cart Id: {cartId}</Text>
        <Heading size='md'>Your cart</Heading>
        {items.map(item => {
          const product = Object.values(item)[0];
          return (
            <div key={product.name}>
              <Heading as='h3' size='sm'>
                {product.name}
              </Heading>
              <Text>{product.description}</Text>
              <Text>Qty: {product.quantity}</Text>
              <Text>Price: ${product.price}</Text>
            </div>
          );
        })}
        <Heading size='md'>Summary</Heading>
        <Text>Subtotal: {subtotal}</Text>
        <Heading as='h3' size='sm'>
          Offers applied
        </Heading>
        {offers.map(offer => (
          <Text key={offer.description}>
            Discount applied: {offer.description} (-${offer.discountAmount})
          </Text>
        ))}
        <Text>Discount total: -${discount}</Text>
        <Heading as='h3' size='sm'>Total: ${total}</Heading>
        <Box>
          <Checkbox>I agree to the SEEK Advertising Terms & Conditions</Checkbox> (
          <Link>click to read</Link>)
        </Box>
        <Button disabled>Proceed to payment</Button>
      </Flex>
    </Flex>
  );
};

export default Cart;
