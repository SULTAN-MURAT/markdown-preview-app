import { configureStore } from '@reduxjs/toolkit';
import textReducer from './text/textSlice';

export const store = configureStore({
  reducer: {
    text: textReducer,
  },
});
