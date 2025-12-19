import React from 'react';
import { OrderBurgger } from './redux';
import { connect } from 'react-redux';
const BurggerBox = (props) => {
  console.log(props);
  return (
    <div>
      {' '}
      <h2>Number of Burgger - {props.Brgger_base}</h2>
      <h1>
        <button onClick={props.Brgger_base}>Order pizza</button>
      </h1>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    Brgger_base: state.Brgger_base,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    orderPizza: () => dispatch(OrderBurgger()),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(BurggerBox);
