/*
 *
 * ProductList saga
 * 
 * configure in store/rootSaga
 */

import { put, takeLatest, all, call } from "redux-saga/effects";
import axios from "axios";
import { GET_PRODUCTS } from "./constants";
import { push } from "connected-react-router";
import { getProductsSuccess, getProductsFailed } from "./actions";

function* handleGetProducts(action) {
  try {
    const { pageNumber, limit } = action;
    const URL = `/api/products?page=${pageNumber}&limit=${limit}`;
    const response = yield call([axios, axios.get], URL);
    yield put(push(`/${pageNumber}`));
    yield put(getProductsSuccess(response.data));
  } catch (e) {
    yield put(getProductsFailed(e));
  }
}

function* ProductListSaga() {
  yield all([takeLatest(GET_PRODUCTS, handleGetProducts)]);
}

export default ProductListSaga;
