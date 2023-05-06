import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';
import cartReducer from './index'

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
