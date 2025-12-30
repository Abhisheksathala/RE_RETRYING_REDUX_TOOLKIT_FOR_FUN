import { rootReducer } from './rootReducer';
import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';

// codebase
const Logger = reduxLogger.createLogger();
const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Logger)));

export default Store;
