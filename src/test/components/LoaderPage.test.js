import React from "react";
import LoaderPage from "../../components/LoaderPage";
import {shallow} from "enzyme";

test("should return the Loader page component correctly", () => {
  const wrapper = shallow(<LoaderPage/>);
  expect(wrapper).toMatchSnapshot();
});