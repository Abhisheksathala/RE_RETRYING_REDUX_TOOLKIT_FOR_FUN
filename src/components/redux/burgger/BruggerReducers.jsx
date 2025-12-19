import { BURGGER_ORDER } from './BurggerTypes';

const BurgerInitial = {
  Brgger_base: 1000,
};

export const BurggerReducer = (state = BurgerInitial, action) => {
  switch (action.type) {
    case BURGGER_ORDER:
      return {
        ...state,
        Brgger_base: state.Brgger_base - 1,
      };
    default:
      return state;
  }
};
