import './ExpenseItem'
const ExpenseItem = () => {
    const date = new Date(2024, 10, 12)
    const title = "New book"
    const price = 30.99
    return (
        <div className = "expense-item">
            <div className = "expense-item_description">
                <h2>Item</h2>
                <div className = "expense-item_price">Price</div>
            </div>
         </div>
    )
}
export default ExpenseItem