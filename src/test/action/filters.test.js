import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from "../../action/filters";
import moment from "moment";

test("should generate start date action object", () => {
  const startDate = moment(0);
  const action = setStartDate(startDate);
  expect(action).toEqual({
    type: "SET_START_DATE_FILTER",
    startDate
  })
});

test("should generate end date action object", () => {
  const endDate = moment(0);
  const action = setEndDate(endDate);
  expect(action).toEqual({
    type: "SET_END_DATE_FILTER",
    endDate
  })
});

test("should generate sort by amount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT_FILTER"
  })
});

test("should generate sort by date action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE_FILTER"
  })
});

test("should generate set text action object", () => {
  const action = setTextFilter("Rent");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "Rent"
  })
});

test("should generate default set text action object", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  })
});