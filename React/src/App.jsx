import './App.css';
import Expenses from './components/Expenses.jsx';

const App = () => {
  const expenses = [
    { 
      date: new Date(2024, 10, 12),
      item:"New book",
      price: 30.99
    },
    {
      date: new Date(2024, 10, 12),
      item:"New jeans",
      price: 99.99
    }

  ];
 
 
  return (
    <div className = "App">
      <Expenses expenses= {expenses}/>
    </div>
  );
};

export default App;
