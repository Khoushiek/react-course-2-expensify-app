export const setTextFilter = ( text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE_FILTER'
});

export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT_FILTER'
});

export const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE_FILTER",
  startDate
});

export const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE_FILTER",
  endDate
});