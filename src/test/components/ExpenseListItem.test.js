import {shallow} from "enzyme";
import expenses from "../fixtures/expenses";
import React from "react";
import ExpenseListItem from "../../components/ExpenseListItem";

test("should return Expense List Item", () => {
  const expense = expenses[1]
  const wrapper = shallow(<ExpenseListItem 
    description = {expense.description} 
    amount={expense.amount} 
    createdAt={expense.createdAt}/>);
  expect(wrapper).toMatchSnapshot();
})