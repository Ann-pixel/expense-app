import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expense.title);

  const clickHandler = () => {
    console.log("click!");
    setTitle("Clicked!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.expense.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
