import { Box, Button, Checkbox, Flex, Heading, Link } from '@chakra-ui/react';
import React from 'react';

function App() {
  return (
    <Flex w='100vw' h='100vh' justify='center' align='center'>
      <Flex direction="column" maxW={768} border="1px" gap="16px" padding="16px">
        <Heading as='h1'>Checkout</Heading>
        <Heading size="md">Customer details</Heading>
        <Heading size="md">Your cart</Heading>
        <Heading size="md">Summary</Heading>
        <Box>
          <Checkbox>I agree to the SEEK Advertising Terms & Conditions</Checkbox>{' '}
          (<Link>click to read</Link>)
        </Box>
        <Button disabled>Proceed to payment</Button>
      </Flex>
    </Flex>
  );
}

export default App;
