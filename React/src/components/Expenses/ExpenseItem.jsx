import Card from '../UI/Card.jsx';
import ExpenseDate from './ExpenseDate.jsx';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.expenseData.date} />
                <div className='expense-item__description'>
                    <h2>{props.expenseData.title}</h2>
                    <div className='expense-item__price'>${props.expenseData.amount?.toFixed(2)}</div>  {/* ✅ Fixed undefined error */}
                </div>
            </Card>
        </li>
    );
};

export default ExpenseItem;
