import React from 'react';
import { useStore, StoreProvider } from './store';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Cart from './components/Cart';
import productsData from './JSONdata/products.json';

const initialState = {
  cartItems: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useStore();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div>
      <Navbar cartItemCount={state.cartItems.length} />
      <h1>Список товаров</h1>
      <div>
        {productsData.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Cart cartItems={state.cartItems} />
    </div>
  );
};

const RootApp = () => (
  <StoreProvider initialState={initialState} reducer={reducer}>
    <App />
  </StoreProvider>
);

export default RootApp;