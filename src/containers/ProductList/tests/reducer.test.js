import ProductListReducer from "../reducer";

describe("ProductList Reducer", () => {
  it("returns the initial state", () => {
    const initialState = {};
    expect(ProductListReducer(initialState, {})).toEqual({});
  });
});
