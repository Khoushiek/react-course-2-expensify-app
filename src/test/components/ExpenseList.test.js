import {ExpenseList} from "../../components/ExpenseList";
import {shallow} from "enzyme";
import expenses from "../fixtures/expenses";
import React from "react";

test("should return list of expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});

test("should not return list of expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={[]}/>);
  expect(wrapper).toMatchSnapshot();
});