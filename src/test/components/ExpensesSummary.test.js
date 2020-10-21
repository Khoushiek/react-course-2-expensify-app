import {shallow} from "enzyme";
import expenses from "../fixtures/expenses";
import React from "react";
import {ExpensesSummary} from "../../components/ExpensesSummary";

test("Should return a expenses summary for single expense", () => {
  const wrapper = shallow(<ExpensesSummary 
                           expenses={[expenses[0]]}
                            />);
  expect(wrapper).toMatchSnapshot();
});

test("Should return a expenses summary for multiple expense", () => {
  const wrapper = shallow(<ExpensesSummary 
                           expenses={expenses}
                            />);
  expect(wrapper).toMatchSnapshot();
})