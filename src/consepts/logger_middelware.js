import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import { combineReducers } from 'redux';
// ACTION TYPE (constant)
const ORDER_PIZZA = 'ORDER_PIZZA';
const ORDER_BURGGER = 'ORDER_BURGER';
const createlogger = reduxLogger.createLogger();
const applymiddleware = applyMiddleware;
// ACTION CREATOR
function orderPizza() {
  return {
    type: ORDER_PIZZA,
    shopName: 'PIZZA SHOP',
  };
}
function orderurger() {
  return {
    type: ORDER_BURGGER,
    shopName: 'PIZZA SHOP',
  };
}

// INITIAL STATE
const initialStatePizza = {
  pizzaBase: 100,
  toppings: ['cheese', 'capsicum'],
};
const initialStateburgerr = {
  burgerBase: 100,
};

// REDUCER
const reducerpizza = (state = initialStatePizza, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        pizzaBase: state.pizzaBase - 1,
      };
    default:
      return state;
  }
};

const reducerburgger = (state = initialStateburgerr, action) => {
  switch (action.type) {
    case ORDER_BURGGER:
      return {
        ...state,
        burgerBase: state.burgerBase - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  pizza: reducerpizza,
  burgger: reducerburgger,
});

// STORE
const store = createStore(rootReducer, applymiddleware(createlogger));

// READ STATE
// console.log('initaial state', store.getState());

//3 - Registorey
store.subscribe(() => {});

// 4 - dishpatch
store.dispatch(orderPizza());
store.dispatch(orderurger());
