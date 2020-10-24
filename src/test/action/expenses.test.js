import {addExpense, editExpense, removeExpense, startAddExpense} from "../../action/expenses";
import expenses from "../fixtures/expenses";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import regeneratorRuntime from "regenerator-runtime";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

test("should return remove expense action object", () => {
  const action = removeExpense({id: "123ab"});
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123ab"
  })
});

test("should return edit expense action object", () => {
  const action = editExpense("123ab", {note: "New Note"});
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123ab",
    updates: {note: "New Note"}
  })
});

test("should add the expense data to database and store", async () => {
  const store = createMockStore({});
  const expenseData = {
    description: "Watch",
    note: "It is indeed excellent",
    createdAt: 343434,
    amount: 4556
  };

  await store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
  });
});

test("should add the expense data to database and store with default values", async () => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: "",
    note: "",
    createdAt: 0,
    amount: 0
  };

  await store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
  });
});

test("should return the add expense object with provided values", () => {
  const action = addExpense(expenses[1]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[1]
  });
});

// test("should setup add expense object with default", () => {
//   const action =  addExpense();
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       id: expect.any(String),
//       description: "",
//       amount: 0,
//       createdAt: 0,
//       note: ""
//     }

//   })
// })