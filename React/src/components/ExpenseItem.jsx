import ExpenseDate from './ExpenseDate.jsx'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    
    return (
    <div className = "expense-item">
         <ExpenseDate date = {props.data.date}/>
            <div className = "expense-item_description">
                <h2>{props.data.item}</h2>
                <div className = "expense-item_price">
                    {props.data.price}</div>
            </div>
         </div>
    )
}
 
export default ExpenseItem