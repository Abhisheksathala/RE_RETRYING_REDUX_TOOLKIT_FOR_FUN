import React from 'react';
import { OrderPizza } from './redux';
import { connect } from 'react-redux';

const PizzaBox = (props) => {
  console.log(props);

  return (
    <div>
      <h2>Number of pizzas - {props.pizzaBase}</h2>
      <h1>
        <button onClick={props.orderPizza}>Order pizza</button>
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pizzaBase: state.pizzaBase,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    orderPizza: () => dispatch(OrderPizza()),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(PizzaBox);
