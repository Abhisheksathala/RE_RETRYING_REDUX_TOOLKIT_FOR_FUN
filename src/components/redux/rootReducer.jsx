import { combineReducers } from 'redux';
import { PizzaReducer } from './pizza/PizzaReducers';
import { BurggerReducer } from './burgger/BruggerReducers';

export const rootReducer = combineReducers({
  pizza: PizzaReducer,
  burger: BurggerReducer,
});
