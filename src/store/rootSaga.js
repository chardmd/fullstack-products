import { all, fork } from "redux-saga/effects";
import productListSaga from "../containers/ProductList/saga";

export default function* rootSaga() {
  yield all([fork(productListSaga)]);
}
