import React from 'react';
import './AddExpense.css';

const AddExpense = props => {
  return (
    <div className="addExpense">
      <button onClick={props.onClick}>Add New Expense</button>
    </div>
  );
};

export default AddExpense;
