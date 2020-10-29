import {shallow} from "enzyme";
import React from "react";
import {LoginPage} from "../../components/LoginPage";

test("Should return a login page", () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test("should call login function on button click", () => {
  let startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find("button").simulate("click");
  expect(startLogin).toHaveBeenCalled();
});