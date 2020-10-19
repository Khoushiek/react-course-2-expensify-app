import {shallow} from "enzyme";
import React from "react";
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";

test("should return expense dashboard page component", () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
})