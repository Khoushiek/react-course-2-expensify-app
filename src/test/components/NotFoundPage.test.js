import {shallow} from "enzyme";
import React from "react";
import NotFoundPage from "../../components/NotFoundPage";

test("should return Not found page component", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
})