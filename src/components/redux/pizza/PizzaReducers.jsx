import { OREDER_PIZZA } from './PizzaTypes';

const intialState = {
  pizzaBase: 1000,
};

export const PizzaReducer = (state = intialState, action) => {
  switch (action.type) {
    case OREDER_PIZZA:
      return {
        ...state,
        pizzaBase: state.pizzaBase - 1,
      };

    default:
      return state;
  }
};
