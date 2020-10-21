export default (expenses) => {
  const expensesAmounts = expenses.map((expense) => expense.amount);
  return expensesAmounts.reduce((result, item) => result+item, 0);
};