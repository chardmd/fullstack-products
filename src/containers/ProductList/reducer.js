/*
 *
 * ProductList reducer
 * 
 */

import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
} from "./constants";

const initialState = {
  data: [],
  total: 0,
  page: 1,
  limit: 8,
};

function productListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return state;
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...action.data,
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        err: action.err,
      };
    default:
      return state;
  }
}

export default productListReducer;
