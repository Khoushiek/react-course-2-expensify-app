import React from "react";
import {connect} from "react-redux";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from "../action/filters";
import {DateRangePicker} from "react-dates";

export class ExpenseListFilter extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({calendarFocused}))
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
  };
  
  onSortChange = (e) => {
    if (e.target.value ==="date")
    {
      this.props.sortByDate();
    }
    else {
      this.props.sortByAmount();
    }
  };

  render(){
    return (
      <div className="content-container" >
        <div className="input-group" >
          <div className="input-group-item">
            <input type="text" className="text-input"
             value={this.props.filters.text} 
             onChange={this.onTextChange}
             placeholder="Search Expenses"
             />
          </div>
          <div className="input-group-item" >
            <select value={this.props.filters.sortBy} className="select" onChange={this.onSortChange}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group-item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => {false}}
            />
          </div>
        </div>
      </div>
    )
  }
};

const mapPropToState = (state) => {
  return {
    filters: state.filters
  }; 
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapPropToState, mapDispatchToProps)(ExpenseListFilter);