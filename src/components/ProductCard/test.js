import React from "react";
import { shallow } from "enzyme";
import ProductCard from "./index";

describe("<ProductCard />", () => {
  const wrapper = shallow(
    <ProductCard
      title="Cyclobenzaprine Hydrochloride"
      description="reinvent back-end deliverables"
      imageUrl="https://dummyimage.com/324x341.bmp/dddddd/000000"
      price="$30.22"
    />
  );

  it("should render <ProductCard /> with price", () => {
    expect(wrapper.find(".price").text()).toEqual("$30.22");
  });

  it("should render <ProductCard /> with title", () => {
    expect(wrapper.find(".title").text()).toEqual(
      "Cyclobenzaprine Hydrochloride"
    );
  });

  it("should render <ProductCard /> with description", () => {
    expect(wrapper.find(".description").text()).toEqual(
      "reinvent back-end deliverables"
    );
  });

  it("should render <ProductCard /> with image", () => {
    expect(
      wrapper
        .find("img")
        .prop("src")
        .valueOf()
    ).toEqual("https://dummyimage.com/324x341.bmp/dddddd/000000");
  });
});
