import React, { useState } from 'react';
import { connect } from 'react-redux';
import { OrderBurgger } from './redux';

function CustomerChoice(props) {
  const [number, setNumber] = useState(1);
  return (
    <div className="container">
      <h2 className="text">Number of Burger Buns available - {props.burgerBuns}</h2>
      <input
        type="text"
        className="input-field"
        placeholder="Enter your number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button className="btn" onClick={() => props.orderBurger(number)}>
        Order Burger
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    burgerBuns: state.burger.Brgger_base,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    orderBurger: (number) => dispatch(OrderBurgger(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomerChoice);
