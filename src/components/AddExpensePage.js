import React from 'react';
import ExpenseFormPage from "./ExpenseForm";
import {connect} from "react-redux";
import {startAddExpense} from "../action/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  }
  render (){
     return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseFormPage
          onSubmit = {this.onSubmit} 
        />
      </div>
     );
  };
};

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);