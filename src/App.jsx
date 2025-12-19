import React from 'react';
import PizzaBox from './components/PizzaBox';
import { Provider } from 'react-redux';
import Store from './components/redux/store';

const App = () => {
  return (
    <div>
      <Provider store={Store}>
        <PizzaBox />
      </Provider>
    </div>
  );
};

export default App;
