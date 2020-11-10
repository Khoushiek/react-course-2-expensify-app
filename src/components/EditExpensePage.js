import React from 'react';
import {connect} from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {startEditExpense, startRemoveExpense} from "../action/expenses";
import ConfirmationModal from "./ConfirmationModal";

export class EditExpensePage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense)
    this.props.history.push("/")
  };

  onRemoveExpense = () => {
    this.props.startRemoveExpense({id: this.props.expense.id})
    this.props.history.push("/")
    this.setState(() => ({
      isModalOpen: false
    }));
  }

  handleModalOpen = () => {
    this.setState(() => ({
      isModalOpen: true
    }));
  }

  handleModalClose = () => {
    this.setState(() => ({
      isModalOpen: false
    }));
  };

  render() {
    const disableClass = this.state.isModalOpen ? 'disabled' : '';
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h2>Edit Expense</h2>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
          expense = {this.props.expense}
          onSubmit = {this.onSubmit}
          disableClass={disableClass}
          />
          <button className="box-layout__button button--secondary" onClick= {this.handleModalOpen} disabled={disableClass}>Remove Expense</button>
        </div>
        <ConfirmationModal onRemoveExpense={this.onRemoveExpense} isModalOpen={this.state.isModalOpen} handleModalClose={this.handleModalClose}/>
      </div>
    );
  }
};

const mapStateToProp = (state, props) => ({ 
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProp = (dispatch, props) => (
  {
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
  } 
);

export default connect(mapStateToProp, mapDispatchToProp)(EditExpensePage);