import React from 'react';
import PizzaBox from './components/PizzaBox';
import { Provider } from 'react-redux';
import Store from './components/redux/store';
import HooksContainer from './components/HooksContainer';
import BurggerBox from './components/BurggerBox';

const App = () => {
  return (
    <div>
      <Provider store={Store}>
        {/* <PizzaBox /> */}
        <HooksContainer />
        <BurggerBox />
      </Provider>
    </div>
  );
};

export default App;
