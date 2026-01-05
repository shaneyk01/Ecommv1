import React from 'react';
import { useImageFallback } from '../utils/imageFallback';
import './CartItem.css';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const imageSrc = useImageFallback(item.image);

  const handleRemoveClick = () => {
    if (onRemove) {
      onRemove(item.id);
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (onUpdateQuantity) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  const subtotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={imageSrc} alt={item.title} />
      </div>
      <div className="cart-item-details">
        <h4 className="cart-item-title">{item.title}</h4>
        <p className="cart-item-price">Price: ${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-quantity">
        <label htmlFor={`qty-${item.id}`}>Qty:</label>
        <input
          id={`qty-${item.id}`}
          type="number"
          min="1"
          max="99"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="quantity-input"
        />
      </div>
      <div className="cart-item-subtotal">
        <p className="subtotal">${subtotal}</p>
      </div>
      <button
        className="remove-btn"
        onClick={handleRemoveClick}
        aria-label={`Remove ${item.title} from cart`}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
