import { all, fork } from "redux-saga/effects";
import homeSaga from "../containers/ProductList/saga";

export default function* rootSaga() {
  yield all([fork(homeSaga)]);
}
