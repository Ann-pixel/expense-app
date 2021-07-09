import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterHandler = (year) => {
    // console.log(year);
    setFilteredYear(year);
  };
  return (
    <div>
      <ExpensesFilter onFilter={filterHandler} selected={filteredYear} />
      <Card className="expenses">
        {props.expenses.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
      </Card>
    </div>
  );
}
export default Expenses;
