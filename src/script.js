import { createStore } from 'redux';

// ACTION TYPE (constant)
const ORDER_PIZZA = 'ORDER_PIZZA';

// ACTION CREATOR
function orderPizza() {
  return {
    type: ORDER_PIZZA,
    shopName: 'PIZZA SHOP',
  };
}

// INITIAL STATE
const initialState = {
  pizzaBase: 100,
  toppings: ['cheese', 'capsicum'],
};

// REDUCER
const reducer = (state = initialState, action) => {
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

// STORE
const store = createStore(reducer);

// READ STATE
console.log('initaial state', store.getState());

//3 - Registorey
const unsub = store.subscribe(() => console.log('update', store.getState()));

// 4 - dishpatch
store.dispatch({
  type: ORDER_PIZZA,
});

// update
console.log('After Order:', store.getState());
unsub();
