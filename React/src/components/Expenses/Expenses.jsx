import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = (year) => {
        console.log('Year data in Expenses.js:', year);
        setFilteredYear(year);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return new Date(expense.date).getFullYear() === parseInt(filteredYear);
      });
      

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
