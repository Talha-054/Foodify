import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from '../slices/cartSlice';
import { modalSlice } from '../slices/modalSlice';

export const store = configureStore({
      reducer: {
            'cart': cartSlice.reducer,
            'backdrop': modalSlice.reducer
      }
});