import './ExpenseItem.css'
const ExpenseItem = (props) => {
    
    console.log(props)
    console.log(props.data)

    return (
        <div className = "expense-item">
            <div>{props.data.date.toString()}</div>
            <div className = "expense-item_description">
                <h2>{props.data.item}</h2>
                <div className = "expense-item_price">
                    {props.data.price}</div>
            </div>
         </div>
    )
}
export default ExpenseItem