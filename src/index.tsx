import { ChakraProvider, Flex, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useCart } from './features/cart';
import Cart from './pages/Cart';
import reportWebVitals from './reportWebVitals';
import { carts } from './features/cart/mock__data';
import './index.css';

// TODO: extract flex wrappers to layout components
const Index = (): JSX.Element => {
  const [selectedCart, setSelectedCart] = useState('1');
  const cart = useCart(selectedCart);
  const allCarts = Object.keys(carts);

  return (
    <React.StrictMode>
      <ChakraProvider>
        <Flex maxW='100vw' h='100%' justify='center' align='center' my='32px'>
          <Flex direction='column' maxW={768} border='1px' gap='16px' padding='16px'>
            {process.env.NODE_ENV !== 'production' && (
              <Select onChange={e => setSelectedCart(e.target.value)} mb='32px'>
                {allCarts.map(cartId => (
                  <option key={cartId} value={`${cartId}`}>
                    {cartId}
                  </option>
                ))}
              </Select>
            )}
            <Cart cart={cart} selectedCartId={selectedCart} />
          </Flex>
        </Flex>
      </ChakraProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
