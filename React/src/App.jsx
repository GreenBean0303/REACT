import './App.css';
import Expenses from './components/Expenses/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx'; 
import { useState } from "react";

const DUMMY_EXPENSES = [
  { 
      id: "id1",
      date: new Date(2024, 10, 12),
      title: "New book",
      amount: 30.99
  },
  {
      id: "id2",
      date: new Date(2023, 5, 25),
      title: "New jeans",
      amount: 99.99
  },
  {
      id: "id3",
      date: new Date(2025, 2, 15),
      title: "New Laptop",
      amount: 1200
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
      console.log("In App.js");
      console.log(expense);

    
      setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
      <div className="App">
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses expenses={expenses} /> 
      </div>
  );
};

export default App;
