import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart, clearCart } from '../features/cart/cartSlice';


export const useSessionPersistence = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);


  useEffect(() => {
    const savedCart = sessionStorage.getItem('ecommerce_cart_state');
    if (savedCart) {
      try {
        const cartData = JSON.parse(savedCart);
        dispatch(loadCart(cartData));
      } catch (error) {
        console.error('Error loading cart from sessionStorage:', error);
        
        sessionStorage.removeItem('ecommerce_cart_state');
      }
    }
  }, [dispatch]);


  useEffect(() => {
    if (cart.items.length > 0) {
      const cartData = {
        items: cart.items,
        total: cart.total,
        itemCount: cart.itemCount,
      };
      sessionStorage.setItem('ecommerce_cart_state', JSON.stringify(cartData));
    }
  }, [cart]);

  
  const clearCartPersistence = () => {
    dispatch(clearCart());
    sessionStorage.removeItem('ecommerce_cart_state');
  };

  return { clearCartPersistence };
};


export const useCart = () => {
  return useSelector((state) => state.cart);
};
