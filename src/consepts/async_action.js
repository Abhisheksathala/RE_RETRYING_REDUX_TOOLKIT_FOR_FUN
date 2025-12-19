import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import axios from 'axios';
const applymiddleware = applyMiddleware;

const FETCH_RESQUEST = 'FETCH_RESQUEST';
const FEATCH_SUCCESS = 'FEATCH_SUCCESS';
const FEATCH_ERROR = 'FEATCH_ERROR';

// state

const InitialState = {
  loading: false,
  products: [],
  error: false,
};

// acction creater

function Feachrequest() {
  return {
    type: FETCH_RESQUEST,
  };
}
function Feachsuccess(products) {
  return {
    type: FEATCH_SUCCESS,
    payload: products,
  };
}
function Feacherror() {
  return {
    type: FEATCH_ERROR,
  };
}

// reducer

const Reducer = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_RESQUEST:
      return {
        ...state,
        loading: true,
      };
    case FEATCH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case FEATCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

// thun action creater
const FetchProducts = () => {
  return function (dispatch) {
    dispatch(Feachrequest());
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        const products = res.data;
        console.log(products);
      })
      .catch((err) => {
        dispatch(Feacherror(err));
      });
  };
};

// creatng store
const store = createStore(Reducer, applymiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch(FetchProducts());
