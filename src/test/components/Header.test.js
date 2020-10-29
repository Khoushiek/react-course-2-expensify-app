import React from "react";
import {Header} from "../../components/Header";
import {shallow} from "enzyme";

test("should return the header component correctly", () => {
  const wrapper = shallow(<Header startLogout={() => {}}/>);
  expect(wrapper).toMatchSnapshot();
});

test("should call logout function on button click", () => {
  let startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find("button").simulate("click");
  expect(startLogout).toHaveBeenCalled();
});

