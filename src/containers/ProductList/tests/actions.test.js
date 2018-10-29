import { getProducts } from "../actions";
import { GET_PRODUCTS } from "../constants";

describe("ProductList actions", () => {
  describe("getProducts Action", () => {
    it("has a type of GET_PRODUCTS", () => {
      const expected = {
        type: GET_PRODUCTS,
      };
      expect(getProducts()).toEqual(expected);
    });
  });
});
