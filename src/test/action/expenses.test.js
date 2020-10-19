import {addExpense, editExpense, removeExpense} from "../../action/expenses";

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

test("should setup add expense object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 4500,
    createdAt: 1000,
    note: "Expensive Note"
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
    id: expect.any(String),
    ...expenseData
    }
  })
});

test("should setup add expense object with default", () => {
  const action =  addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      amount: 0,
      createdAt: 0,
      note: ""
    }

  })
})