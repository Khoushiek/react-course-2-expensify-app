import React from "react";
import { AddExpensePage } from "../../components/AddExpensePage";
import {shallow} from "enzyme";
import expenses from "../fixtures/expenses";

let startAddExpense, history, wrapper;

beforeEach(() => {
  startAddExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
}
);

test("should return add expense page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should call the on submit function correctly", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
});