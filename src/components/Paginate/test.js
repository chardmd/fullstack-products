import React from "react";
import { shallow } from "enzyme";
import Paginate from "./index";

describe("<Paginate />", () => {
  it("Should have an active page", () => {
    const wrapper = shallow(
      <Paginate
        activePage={7}
        itemsCountPerPage={10}
        totalItemsCount={10}
        onGetData={() => {}}
      />
    );
    expect(wrapper.find(".active")).not.toBeUndefined();
  });
});
