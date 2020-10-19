import {createStore, combineReducers } from "redux";
import uuid from "uuid";

const addExpense = ({
  id = uuid(),
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id,
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({id} = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

const setTextFilter = ( text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE_FILTER'
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT_FILTER'
});

const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE_FILTER",
  startDate
})

const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE_FILTER",
  endDate
})

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    if (sortBy === "date") {
      return a.createdAt > b.createdAt ? -1 : 1;
    }
    else if (sortBy === "amount"){
      return a.amount > b.amount ? -1 : 1;
    }
  })
}

const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {
  switch(action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id } ) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        }
        else {
          return expense;
        }
      })
    default:
      return state;
  }
}

const filterReducerDefaultState = {
  text: "",
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
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
}

const store = createStore(
  combineReducers (
    {
    expenses: expensesReducer,
    filters: filterReducer
    }
  )
)

store.subscribe( () => {
  const expenses = store.getState().expenses;
  const filters = store.getState().filters;
  const visibleExpenses = getVisibleExpenses(expenses, filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense(
  {
    description: "Rent is very high expense",
    amount: 301,
    createdAt: 1000
  }
))

const expenseTwo = store.dispatch(addExpense(
  {
    description: "Coffee is very low",
    amount: 300,
    createdAt: -1000
  }
))

// store.dispatch(removeExpense({id: expenseTwo.expense.id}));

// store.dispatch(editExpense(expenseOne.expense.id, {amount: 400}));

// store.dispatch(setTextFilter("Very"));

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-1250));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(999));



const demoState = {
  expenses: [{
    id: 'asdasdasd',
    description: "January Rent",
    note: "This was the final payment",
    amount: 54500,
    createdAt: 0
  }],

  filters: {
    text: "rent",
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};