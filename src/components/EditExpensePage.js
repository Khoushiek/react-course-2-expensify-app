import React from 'react';
import {connect} from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {editExpense, removeExpense, startRemoveExpense} from "../action/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push("/")
  }

  onRemoveExpense = () => {
    this.props.startRemoveExpense({id: this.props.expense.id})
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        <ExpenseForm
          expense = {this.props.expense}
          onSubmit = {this.onSubmit}
        />
        <button onClick= {this.onRemoveExpense}>Remove</button>
      </div>
    );
  }
};

const mapStateToProp = (state, props) => ({ 
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProp = (dispatch, props) => (
  {
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
  } 
);

export default connect(mapStateToProp, mapDispatchToProp)(EditExpensePage);