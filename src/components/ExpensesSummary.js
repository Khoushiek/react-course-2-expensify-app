import React from "react";
import selectExpenses from "../selectors/expenses";
import totalExpenses from "../selectors/expenses-total";
import {Link} from "react-router-dom";
import { connect } from "react-redux";

const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(value);


export const ExpensesSummary = (props) => {
  const expensesTotal = totalExpenses(props.expenses);
  const expensesCount = props.expenses.length
  const expenseWord = (expensesCount ===1 ? "expenses" : "expenses")
  return (
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">You are viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{numberFormat(expensesTotal / 100 )}</span></h2>
        <div className="page-header__actions">
          <Link className="box-layout__button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapPropToState = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapPropToState)(ExpensesSummary);
