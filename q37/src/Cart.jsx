import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeToCart } from './features/cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeToCart(product));
  };

  return (
    <div>
      <h2>Cart</h2>
      {
        cart.length > 0 ? (
          <div className="cart-list">
            {
              cart.map((product, index) => (
                <div key={index} className="cart-item">
                  <img
                    className="cart-item-image"
                    src={product.image}
                    alt={product.name}
                  />

                  <div className="cart-item-info">
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                    <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
                  </div>
                </div>
              ))
            }
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )
      }
    </div>
  );
};

export default Cart;
