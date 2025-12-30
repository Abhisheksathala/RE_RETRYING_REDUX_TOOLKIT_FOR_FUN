import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from '../features/pizza/pizzaSlice.js';
import reduxLogger from 'redux-logger';

const logger = reduxLogger.createLogger({
  collapsed: true, // Collapse logs by default
  diff: true, // Show diff between states
});

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
    // OR using spread operator (alternative syntax)
    // return [...getDefaultMiddleware(), logger];
  },
});

export default store;
