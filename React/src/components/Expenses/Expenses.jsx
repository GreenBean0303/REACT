import { useState } from 'react';
import ExpenseItem from "./ExpenseItem.jsx";
import "./Expenses.css";
import Card from "../UI/Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx"; 

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2024"); 

    const filterChangeHandler = (selectedYear) => {
        console.log("Selected Year:", selectedYear);
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.expenses.map((expense, index) => (
                <ExpenseItem key={index} data={expense} />
            ))}
        </Card>
    );
};

export default Expenses;
