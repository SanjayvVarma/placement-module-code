import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './features/cartSlice';
import productsData from './data/productsData';

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {
          productsData.map(product => (
            <div key={product.id} className="product-card">
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ProductList;