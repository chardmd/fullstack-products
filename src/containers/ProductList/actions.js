/*
 *
 * ProductList actions
 *
 */

import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
} from "./constants";

export function getProducts(pageNumber, limit) {
  return {
    type: GET_PRODUCTS,
    pageNumber,
    limit,
  };
}

export function getProductsSuccess(data) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    data,
  };
}

export function getProductsFailed(err) {
  return {
    type: GET_PRODUCTS_FAILED,
    err,
  };
}
