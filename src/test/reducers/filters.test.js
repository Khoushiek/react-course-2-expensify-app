import filtersReducer from "../../reducers/filters";
import moment from "moment";

test ("should setup default filter values", () => {
  const state = filtersReducer(undefined, {type: "@@INIT"});
  expect(state).toEqual({
    text: "",
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test("should set sort by to amount", () => {
  const state = filtersReducer(undefined, {type: "SORT_BY_AMOUNT_FILTER"});
  expect(state.sortBy).toBe("amount");
});

test("should set sort by date", () => {
  const currentState = {
    text: "",
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  const state = filtersReducer(currentState, {type: "SORT_BY_DATE_FILTER"});
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const state = filtersReducer(undefined, {type: "SET_TEXT_FILTER",text: "rent"});
  expect(state.text).toBe("rent");
});

test("should set start date filter", () => {
  const state = filtersReducer(undefined, {type: "SET_START_DATE_FILTER",startDate: moment(0).add("4", "days")});
  expect(state.startDate).toEqual(moment(0).add("4", "days"));
});

test("should set end date filter", () => {
  const state = filtersReducer(undefined, {type: "SET_END_DATE_FILTER",endDate: moment(0).subtract("2", "days")});
  expect(state.endDate).toEqual(moment(0).subtract("2", "days"));
});