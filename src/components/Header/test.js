import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("<Header />", () => {
  it("renders <Header /> with title and sub heading", () => {
    const wrapper = shallow(<Header title="title1" subheading="subheading1" />);
    expect(wrapper.find(".title").text()).toEqual("title1");
    expect(wrapper.find(".subTitle").text()).toEqual("subheading1");
  });
});
