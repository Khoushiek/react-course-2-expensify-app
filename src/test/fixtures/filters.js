import moment from "moment";

export const filters = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDateL: undefined
};

export const altFilters = {
  text: "bill",
  sortBy: "amount",
  startDate: moment(0),
  endDateL: moment(0).add("3", "days")
};

