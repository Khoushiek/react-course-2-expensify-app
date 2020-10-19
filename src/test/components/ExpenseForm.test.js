import {shallow} from "enzyme";
import expenses from "../fixtures/expenses";
import React from "react";
import ExpenseForm from "../../components/ExpenseForm";
import moment from "moment";

test("should return the expense form correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should return the expense form correctly with data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot;
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot;
});

test("should set the description correctly on change", () => {
  const value = "Something"
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate("change", {
    target: {value}
  });
  expect(wrapper.state("description")).toBe(value);
});

test("should set the note correctly on change", () => {
  const value = "Something new note"
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", {
    target: {value}
  });
  expect(wrapper.state("expenseNote")).toBe(value);
});

test("should set the amount if valid input", () => {
  const value = "45.45";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate("change", {
    target: {value}
  });
  expect(wrapper.state("amount")).toBe(value);
});

test("should not set the amount if invalid input", () => {
  const value = "45.4554";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate("change", {
    target: {value}
  });
  expect(wrapper.state("amount")).toBe("");
});

test("should call submit event on form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
    note: expenses[0].expenseNote
  })
});

test("should trigger on date change event", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("SingleDatePicker").prop("onDateChange")(moment());
  expect(wrapper.state('createdAt')).toEqual(moment());
});

test("should trigger on calendar focus change event", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("SingleDatePicker").prop("onFocusChange")({focused: true});
  expect(wrapper.state('calendarFocused')).toBe(true);
});