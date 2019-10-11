import React from "react";
import { mount } from "enzyme";
import Loader from "./index.js";

it("Renders properly with the correct amount of children", function() {
  const mountWrapper = mount(<Loader />);
  expect(mountWrapper.find("div.lds-ellipsis").length).toBe(1);
});
