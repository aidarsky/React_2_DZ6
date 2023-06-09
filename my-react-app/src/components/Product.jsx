import React from 'react';

const Product = ({ product, addToCart }) => (
  <div>
    <h3>{product.name}</h3>
    <p>Цена: {product.price}</p>
    <p>Цвет: {product.color}</p>
    <p>Фото: {product.picture}</p>
    <p>Категория: {product.category}</p>
    <p>description: {product.description}</p>
    <p>Теги: {product.tags}</p>



    <button onClick={() => addToCart(product)}>Добавить в корзину</button>
  </div>
);

export default Product;