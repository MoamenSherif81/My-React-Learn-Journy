import { useState } from 'react';
import ExpensesList from './components/Expenses/ExpensesList/ExpensesList';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: 'Frontend udemy course',
      price: 297,
      date: new Date('3/5/2023'),
    },
    {
      title: 'Codeforces GYM',
      price: 45,
      date: new Date('3/5/2023'),
    },
    {
      title: '2 USB flash drive',
      price: 300,
      date: new Date('1/5/2023'),
    },
    {
      title: 'Laptop holder',
      price: 139,
      date: new Date('2/5/2023'),
    },
  ]);

  function addExpenseHandler(expense){
    console.log('App.js', expense);
  }

  return (
    <div className="App">
      <h2>Our App</h2>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <ExpensesList expenses={expenses} />
    </div>
  );
}

export default App;
