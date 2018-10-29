import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("<Header />", () => {
  const wrapper = shallow(<Header title="title1" subheading="subheading1" />);
  it("renders <Header /> with title and sub heading", () => {
    expect(wrapper.find(".title").text()).toEqual("title1");
  });
  it("renders <Header /> with sub heading", () => {
    expect(wrapper.find(".subTitle").text()).toEqual("subheading1");
  });
});
