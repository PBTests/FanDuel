import React from "react";
import { mount } from "enzyme";
import Minigame from "./index.js";

it("Renders without throwing an error", function() {
  const mountWrapper = mount(<Minigame />);
  expect(mountWrapper.find("h2").text()).toBe("Objective");
});
