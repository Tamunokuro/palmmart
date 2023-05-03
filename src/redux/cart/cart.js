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
    status: false,
    error: '',
  },
  reducers: {
    addToCart: (state) => {
      const newState = {
        ...state,
        itemCount: state.itemCount + 1,
      };
      return newState;
    },

    removeFromCart: (state, action) => {
      const updatedCart = {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
      return updatedCart;
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

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
