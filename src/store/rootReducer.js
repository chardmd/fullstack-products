import { combineReducers } from "redux";
import productList from "../containers/ProductList/reducer";

const mainReducer = combineReducers({
  productList: productList,
});

const rootReducer = (state, action) => mainReducer(state, action);

export default rootReducer;
