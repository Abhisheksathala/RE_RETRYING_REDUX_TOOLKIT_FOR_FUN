import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzaBase: 10000,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: initialState,
  reducers: {
    pizza_order: (state, action) => {
      state.pizzaBase--;
    },
  },
});

console.log(pizzaSlice);

export default pizzaSlice.reducer; //default export
export const pizzaActions = pizzaSlice.actions; //Named export
