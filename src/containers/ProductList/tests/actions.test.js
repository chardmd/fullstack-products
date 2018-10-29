import { getProducts, getProductsSuccess, getProductsFailed } from "../actions";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
} from "../constants";

describe("ProductList actions", () => {
  describe("getProducts Action", () => {
    it("has a type of GET_PRODUCTS", () => {
      const expected = {
        type: GET_PRODUCTS,
      };
      expect(getProducts()).toEqual(expected);
    });
    it("has a type of GET_PRODUCTS_SUCCESS", () => {
      const expected = {
        type: GET_PRODUCTS_SUCCESS,
      };
      expect(getProductsSuccess()).toEqual(expected);
    });
    it("has a type of GET_PRODUCTS_FAILED", () => {
      const expected = {
        type: GET_PRODUCTS_FAILED,
      };
      expect(getProductsFailed()).toEqual(expected);
    });
  });
});
