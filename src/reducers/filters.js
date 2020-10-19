import moment from "moment";

const filterReducerDefaultState = {
  text: "",
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default (state = filterReducerDefaultState, action) => {
  switch(action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        ...action
      };
    case "SORT_BY_DATE_FILTER":
      return {
        ...state,
        sortBy: 'date'
      };
    case "SORT_BY_AMOUNT_FILTER":
      return {
        ...state,
        sortBy: 'amount'
      };
    case "SET_START_DATE_FILTER":
      return {
        ...state,
        startDate: action.startDate
      }
    case "SET_END_DATE_FILTER":
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
};