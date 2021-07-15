import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  const toggleForm = (evt) => {
    evt.preventDefault();
    setShowForm((curCondition) => !curCondition);
  };
  const titleChangeHandler = (evt) => {
    setEnteredTitle(evt.target.value);
  };
  const amountChangeHandler = (evt) => {
    setEnteredAmount(evt.target.value);
  };
  const dateChangeHandler = (evt) => {
    setEnteredDate(evt.target.value);
  };
  const submitHandler = (evt) => {
    evt.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");

    setShowForm((curCondition) => !curCondition);
  };

  const expenseForm = (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={enteredTitle}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={dateChangeHandler}
            type="date"
            min="01-01-2019"
            max="12-31-2022"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={toggleForm}>Cancel</button>
      </div>
    </form>
  );

  return showForm ? (
    expenseForm
  ) : (
    <button onClick={toggleForm}>Add Expense</button>
  );
};
export default ExpenseForm;
