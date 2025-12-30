import { configureStore } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import pizzaReducer from '../features/pizza/pizzaSlice.js';
import productReducer from './../features/products.js';

const logger = reduxLogger.createLogger({
  collapsed: true, // Collapse logs by default
  diff: true, // Show diff between states
});

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
    // OR using spread operator (alternative syntax)
    // return [...getDefaultMiddleware(), logger];
  },
});

export default store;
