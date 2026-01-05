import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        
        existingItem.quantity += 1;
      } else {
        
        state.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        });
      }

      
      cartSlice.caseReducers.calculateTotals(state);
    },

    
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);

      
      cartSlice.caseReducers.calculateTotals(state);
    },

    
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        if (quantity <= 0) {
          
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          item.quantity = quantity;
        }
      }

      
      cartSlice.caseReducers.calculateTotals(state);
    },

    
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    },

    
    loadCart: (state, action) => {
      const cartData = action.payload;
      if (cartData) {
        state.items = cartData.items || [];
        state.total = cartData.total || 0;
        state.itemCount = cartData.itemCount || 0;
      }
    },

    
    calculateTotals: (state) => {
      state.itemCount = state.items.length;
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
     
      state.total = Math.round(state.total * 100) / 100;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  loadCart,
} = cartSlice.actions;

export default cartSlice.reducer;
