import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    Addtocart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.total = existingItem.quantity * existingItem.price;
      } else {
        state.push({
          id: action.payload.id,
          thumbnail: action.payload.thumbnail,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,  
          total: action.payload.price, 
        });
      }
    },

    RemoveFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    UpdateQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        item.total = item.price * item.quantity;
      }
    },
  },
});

export const { Addtocart, RemoveFromCart, UpdateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
