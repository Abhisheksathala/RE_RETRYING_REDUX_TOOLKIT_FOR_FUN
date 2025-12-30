import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from '../features/pizza/pizzaSlice.js';

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
  },
});

export default store;
