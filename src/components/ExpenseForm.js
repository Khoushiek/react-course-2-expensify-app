import React from "react";
import moment from "moment";
import {SingleDatePicker} from "react-dates";

export default class ExpenseForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? (props.expense.amount/100).toString() : "",
      note: props.expense ? props.expense.note : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    }
  };
  
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}))
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}))
  };

  onAmountChange = (e) => 
  {
    const amount = e.target.value;
    if (amount.match(/^\d{1,}(\.\d{0,2})?$/))
    {
      this.setState(() => ({amount}));
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt){
      this.setState(() => ({createdAt}))
    }
  };

  oncalendarFocusChange = ({focused}) => {
    this.setState(() => ({calendarFocused: focused}))
  };

  onSubmit =(e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({error: "Please Provide a Description and Amount"}))
    }
    else {
      this.setState(() => ({error: ""}))
      this.props.onSubmit({
        description: this.state.description,
        createdAt: this.state.createdAt.valueOf(),
        amount: parseFloat(this.state.amount)*100,
        note: this.state.note
      });
    }
  }

  render(){
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form-error">{this.state.error}</p>}
        <input 
            value={this.state.description}
            className="text-input"
            type="text"
            autoFocus
            placeholder="Description"
            onChange={
              this.onDescriptionChange
            }
          />
          <input
            value={this.state.amount}
            className="text-input"
            type="text"
            placeholder="Amount"
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.oncalendarFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => (false)}
          />
          <textarea
            value={this.state.note}
            placeholder="Add a Expense note"
            className="text-area"
            onChange={this.onNoteChange}
          />
          <div>
            <button className="box-layout__button" disabled={this.props.disableClass}>Save Expense</button>
          </div>
      </form>
    )
  }
};