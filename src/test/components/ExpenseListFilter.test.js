import React from "react";
import {ExpenseListFilter} from "../../components/ExpenseListFilter";
import {shallow} from "enzyme";
import {filters, altFilters} from "../fixtures/filters";
import moment from "moment";

let setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount, wrapper; 

beforeEach(() => {
  setTextFilter = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  wrapper = shallow(<ExpenseListFilter 
                      filters={filters}
                      setTextFilter={setTextFilter}
                      setStartDate={setStartDate}
                      setEndDate={setEndDate}
                      sortByAmount={sortByAmount}
                      sortByDate={sortByDate}
                    />);
});

test("should return Expense list filter correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should return the expense correctly with alt filters", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text changes", () => {
  const value = "rent";
  wrapper.find("input").simulate("change", {
    target: {
      value 
    }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by amount", () => {
  const value = "amount";
  wrapper.find("select").simulate("change", {
    target: {
      value 
    }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should sort by date", () => {
  const value = "date";
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find("select").simulate("change", {
    target: {
      value 
    }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("should handle date changes", () => {
  const value = "amount";
  const startDate = moment(0);
  const endDate = moment(0).add("2, days");
  wrapper.find("DateRangePicker").prop("onDatesChange")({
    startDate,
    endDate
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle on date focus changes", () => {
  const calendarFocused = "endDate"
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
