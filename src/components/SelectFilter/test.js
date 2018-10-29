import React from "react";
import { shallow } from "enzyme";
import SelectFilter from "./index";

describe("<SelectFilter />", () => {
  const wrapper = shallow(<SelectFilter onGetData={() => {}} />);
  it("should render <SelectFilter /> correctly", () => {
    expect(wrapper.find("select")).toHaveLength(1);
  });
});
