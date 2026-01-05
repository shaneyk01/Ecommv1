import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../features/cart/cartSlice';
import { useSessionPersistence } from '../hooks/useSessionPersistence';
import CartItem from '../components/CartItem';
import './Cart.css';


const Cart = () => {
  const dispatch = useDispatch();
  const [showCheckoutMessage, setShowCheckoutMessage] = useState(false);
  const { clearCartPersistence } = useSessionPersistence();

 
  const cart = useSelector((state) => state.cart);
  const { items, total } = cart;

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateQuantity({ id: productId, quantity }));
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      alert('Cart is empty!');
      return;
    }

   
    clearCartPersistence();

    
    setShowCheckoutMessage(true);

    setTimeout(() => {
      setShowCheckoutMessage(false);
    }, 3000);
  };

  const handleContinueShopping = () => {
    
    window.location.href = '/';
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-title">Shopping Cart</h2>

      
        {showCheckoutMessage && (
          <div className="checkout-success">
            <h3>✓ Checkout Successful!</h3>
            <p>Your order has been placed.</p>
          </div>
        )}

       
        {items.length === 0 && !showCheckoutMessage && (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <p>Add items from the home page to get started.</p>
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
          </div>
        )}

        
        {items.length > 0 && (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={handleRemoveItem}
                  onUpdateQuantity={handleUpdateQuantity}
                />
              ))}
            </div>

            
            <div className="cart-summary">
              <div className="summary-row">
                <span className="summary-label">Number of Items:</span>
                <span className="summary-value">{items.length}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Total Quantity:</span>
                <span className="summary-value">
                  {items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>
              <div className="summary-row total-row">
                <span className="summary-label">Total Price:</span>
                <span className="summary-value total-price">${total.toFixed(2)}</span>
              </div>
            </div>

           
            <div className="cart-actions">
              <button className="continue-shopping-btn" onClick={handleContinueShopping}>
                Continue Shopping
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>

            
            <div className="cart-danger-zone">
              <button
                className="clear-cart-btn"
                onClick={() => {
                  if (window.confirm('Are you sure you want to clear your cart?')) {
                    clearCartPersistence();
                  }
                }}
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
