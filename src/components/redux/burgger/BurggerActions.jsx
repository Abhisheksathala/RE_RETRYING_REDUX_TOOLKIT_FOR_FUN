import { BURGGER_ORDER } from './BurggerTypes';

export const OrderBurgger = (number = 1) => {
  return {
    type: BURGGER_ORDER,
    payload: number,
  };
};
