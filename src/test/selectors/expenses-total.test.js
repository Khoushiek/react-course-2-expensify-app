import selectedExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

console.log(selectedExpensesTotal(expenses));

test("should return 0 if no expenses", () => {
  const expenses = [];
  const action = selectedExpensesTotal(expenses);
  expect(action).toBe(0);
});

test("should add up single expense", () => {
  const expense = [expenses[0]];
  const action = selectedExpensesTotal(expense);
  expect(action).toBe(25000);
});

test("should add up multiple expense", () => {
  const action = selectedExpensesTotal(expenses);
  expect(action).toBe(29250);
});

