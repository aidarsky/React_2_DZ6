import React from 'react';

const Cart = ({ cartItems }) => (
  <div>
    <h2>Корзина</h2>
    {cartItems.length === 0 ? (
      <p>Корзина пуста</p>
    ) : (
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    )}
  </div>
);

export default Cart;