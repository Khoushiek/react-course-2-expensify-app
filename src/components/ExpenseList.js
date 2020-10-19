import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import ExpenseListFilter from "./ExpenseListFilter";

export const ExpenseList = (props) => (
  <div>
    <ExpenseListFilter />
    {props.expenses.length === 0 
      ? <p>No Expenses</p>
      : <h3>Expenses List</h3>}
    {props.expenses.map((expense, index) => {
      return <ExpenseListItem 
      id={expense.id}
      key = {expense.id} 
      description={expense.description} 
      amount={expense.amount} 
      createdAt={expense.createdAt}
      />;
    })}
  </div>
);

const mapPropToState = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
};

export default connect(mapPropToState)(ExpenseList);