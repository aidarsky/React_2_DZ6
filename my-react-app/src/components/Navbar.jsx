import React from 'react';

const Navbar = ({ cartItemCount }) => (
  <div>
    <h2>Навигационная панель</h2>
    <p>Количество товаров в корзине: {cartItemCount}</p>
  </div>
);

export default Navbar;