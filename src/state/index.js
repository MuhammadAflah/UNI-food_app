import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state[itemIndex].quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);
      if (itemIndex !== -1) {
        if (state[itemIndex].quantity === 1) {
          state.splice(itemIndex, 1);
        } else {
          state[itemIndex].quantity--;
        }
      }
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cartCount: 0
//   },
//   reducers: {
//     setCartCount: (state, action) => {
//       state.cartCount = action.payload;
//     }
//   }
// });

// export const { setCartCount } = cartSlice.actions;

// export default cartSlice.reducer;

