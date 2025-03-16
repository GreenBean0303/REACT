import './ExpenseForm.css';
import { Fragment, useRef, useState } from 'react';
import Error from '../UI/Error';

const ExpenseForm = (props) => {
    const [error, setError] = useState(null);
    
    const titleInputRef = useRef();
    const amountInputRef = useRef();
    const dateInputRef = useRef();

    const errorHandler = () => {
        setError(null);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        
        const enteredTitle = titleInputRef.current.value.trim();
        const enteredAmount = amountInputRef.current.value.trim();
        const enteredDate = dateInputRef.current.value.trim();

        if (enteredTitle.length === 0 || enteredAmount.length === 0 || enteredDate.length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid title, amount, and date (non-empty values).'
            });
            return;
        }

        const expenseData = {
            title: enteredTitle,
            amount: parseFloat(enteredAmount), // Convert to number
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        props.onCancel();
        
        // Reset input fields
        titleInputRef.current.value = '';
        amountInputRef.current.value = '';
        dateInputRef.current.value = '';
    };

    return (
        <Fragment>
            {error && (
                <Error 
                    title={error.title} 
                    message={error.message} 
                    onConfirm={errorHandler} 
                />
            )}
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" id="title" ref={titleInputRef} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" id="amount" min="0.01" step="0.01" ref={amountInputRef} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" id="date" min="2023-01-01" max="2025-01-31" ref={dateInputRef} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </Fragment>
    );
};

export default ExpenseForm;