import { shallow } from "enzyme";
import React from "react";
import {EditExpensePage} from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let startEditExpense,wrapper,history, startRemoveExpense;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow(<EditExpensePage
    startEditExpense={startEditExpense} 
     history={history} 
     startRemoveExpense={startRemoveExpense}
     expense={expenses[0]}
    />);
});

test ("should render edit expense page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle edit expense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
});

test("should handle remove expense", () => {
  wrapper.find("button").simulate("click");
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expenses[0].id
  });
  expect(history.push).toHaveBeenLastCalledWith("/");
});