import React from 'react';
import { OrderPizza } from './redux';
import { useSelector, useDispatch } from 'react-redux';

const HooksContainer = () => {
  const pizzaBase = useSelector((state) => state.pizzaBase);
  console.log(pizzaBase);
  const dishpatch = useDispatch();

  return (
    <div>
      <h2>Number of pizzas - {pizzaBase}</h2>
      <h1>
        <button onClick={() => dishpatch(OrderPizza())}>Order pizza</button>
      </h1>
    </div>
  );
};

export default HooksContainer;
