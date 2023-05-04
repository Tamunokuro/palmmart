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
      const removedItem = state.mycart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        itemCount: state.itemCount - 1,
        mycart: removedItem,
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

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
