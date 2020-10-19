import React from "react";
import Header from "../../components/Header";
import {shallow} from "enzyme";

test("should return the header component correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
})

