import store from './app/store.js';
import { pizzaActions } from './features/pizza/pizzaSlice.js';
console.log('initial state ', store.getState());
const unsubscribe = store.subscribe(() => {
  console.log('updated staet', store.getState());
});
store.dispatch(pizzaActions.pizza_order());
unsubscribe();
