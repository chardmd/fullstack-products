import { combineReducers } from "redux";
import productListReducer from "../containers/ProductList/reducer";

const mainReducer = combineReducers({
  productList: productListReducer,
});

const rootReducer = (state, action) => mainReducer(state, action);

export default rootReducer;
