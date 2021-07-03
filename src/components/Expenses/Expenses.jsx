import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import "./Expenses.css";
function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} />;
      })}
    </Card>
  );
}
export default Expenses;
