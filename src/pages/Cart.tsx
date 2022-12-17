import { Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

function App() {
  return (
    <Flex w='100vw' h='100vh' justify='center' align='center'>
      <Container maxW={768}>
        <Heading as="h1">Checkout</Heading>
        <Heading>Customer details</Heading>
        <Heading>Your cart</Heading>
        <Heading>Summary</Heading>
      </Container>
    </Flex>
  );
}

export default App;
