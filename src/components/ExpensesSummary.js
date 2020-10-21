import React from "react";
import selectExpenses from "../selectors/expenses";
import totalExpenses from "../selectors/expenses-total";
import { connect } from "react-redux";

const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(value);


export const ExpensesSummary = (props) => {
  const expensesTotal = totalExpenses(props.expenses);
  const expensesCount = props.expenses.length
  return (
    <div>
      {expensesCount === 1
         ? <h3>You are viewing {expensesCount} expense totalling {numberFormat(expensesTotal / 100 )}</h3>
         : <h3>You are viewing {expensesCount} expenses totalling {numberFormat(expensesTotal / 100 )}</h3>}
    </div>
  );
};

const mapPropToState = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapPropToState)(ExpensesSummary);
