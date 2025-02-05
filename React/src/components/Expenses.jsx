import ExpenseItem from "./ExpenseItem.jsx";
import "./ExpenseDate.css";
import Card from "./Card.jsx";

const Expenses = (props) => {
    return (
        <Card className="expenses">
          {props.expenses.map((expense, index) => (
            <ExpenseItem
              key={index}
              data={expense}
            />
          ))}
        </Card>
      );
    };
    
    export default Expenses;