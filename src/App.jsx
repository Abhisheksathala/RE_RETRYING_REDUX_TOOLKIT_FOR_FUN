import React from 'react';

const App = () => {
  const PIZZA = {
    type: 'ORDER_PIZZA',
    SHOPE_NAME: 'PIZZA SHOP',
  };
  return <div>{PIZZA.type}</div>;
};

export default App;
