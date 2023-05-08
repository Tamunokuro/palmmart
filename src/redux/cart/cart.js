import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCart = createAsyncThunk('cart/fetchCart', () => axios
  .get('https://fakestoreapi.com/products')
  .then((response) => response.data));

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    itemCount: 0,
    mycart: [],
    total: 0,
    status: false,
    error: '',
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = state.items.find((item) => item.id === action.payload);
      if (!newItem) {
        return state; // Item not found, do not modify state
      }
      return {
        ...state,
        itemCount: state.itemCount + 1,
        mycart: [...state.mycart, newItem],
      };
    },
    removeFromCart: (state, action) => {
      const indexToRemove = state.mycart.findIndex((item) => item.id === action.payload);
      if (indexToRemove === -1) {
        return state; // Item not found, do not modify state
      }
      const newMycart = [...state.mycart];
      newMycart.splice(indexToRemove, 1);
      return {
        ...state,
        itemCount: state.itemCount - 1,
        mycart: newMycart,
      };
    },
    getTotalPrice: (state) => {
      const cartTotal = state.mycart.reduce((total, item) => total + item.price, 0);
      return {
        ...state,
        total: cartTotal,
      };
    },

  },

  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state) => ({
      ...state,
      status: 'loading',
    }));

    builder.addCase(fetchCart.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      items: action.payload,
    }));

    builder.addCase(fetchCart.rejected, (state, action) => ({
      ...state,
      status: 'failed',
      error: action.error.message,
    }));
  },
});

export const {
  addToCart, removeFromCart, getTotalPrice,
} = cartSlice.actions;
export default cartSlice.reducer;
