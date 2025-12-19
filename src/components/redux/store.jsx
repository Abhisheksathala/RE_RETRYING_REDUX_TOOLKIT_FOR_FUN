import { PizzaReducer } from './pizza/PizzaReducers';

import { createStore } from 'redux';

const Store = createStore(PizzaReducer);

export default Store;
