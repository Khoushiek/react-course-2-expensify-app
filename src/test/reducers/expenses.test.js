import expenses from "../fixtures/expenses";
import expenseReducer from "../../reducers/expenses";
import moment from "moment";

test("should remove the expense", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[0].id
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[1], expenses[2]]);
});

test("should not remove the expense when id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add a expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: "3",
      description: "Coffee",
      note: "",
      amount: 3450,
      createdAt: moment(0).valueOf()
    }
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("should edit a expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "3",
    updates: {
      description: "Car Bill",
      amount: 456000,
      createdAt: moment(0).valueOf(),
      note: ""
    }
  };
  const state = expenseReducer(expenses, action);
  expect(state.find((expense) => expense.id === action.id)).toEqual({
    id: "3",
    ...action.updates,
    note: "",
    createdAt: moment(0).valueOf()
  })
});

test("should not edit a expense if id not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      description: "Car Bill",
      amount: 456000,
      createdAt: moment(0).valueOf(),
      note: ""
    }
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const expensesData = [{
    id: "4",
    description: "Biscuits",
    amount: 25000,
    createdAt: moment(0).subtract("4", "days").valueOf(),
    note: ""
  },
  {
    id: "5",
    description: "Snacks",
    amount: 250,
    createdAt: moment(0).add("4", "days").valueOf(),
    note: ""
  },
  {
    id: "6",
    description: "Laptop",
    amount: 4000,
    createdAt: moment(0).valueOf(),
    note: ""
  }];
  const action = {
    type: 'SET_EXPENSES',
    expenses: expensesData
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expensesData);

});