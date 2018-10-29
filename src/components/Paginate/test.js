import React from "react";
import { shallow } from "enzyme";
import Paginate from "./index";

describe("<Paginate />", () => {
  it("< Previous page button should be disabled", () => {
    const wrapper = shallow(
      <Paginate
        activePage={1}
        itemsCountPerPage={10}
        totalItemsCount={10}
        onGetData={() => {}}
      />
    );
    expect(wrapper.find(".disabled")).not.toBeUndefined();
  });
});
