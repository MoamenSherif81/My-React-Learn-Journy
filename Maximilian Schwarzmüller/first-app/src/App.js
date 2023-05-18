import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import ExpensesList from "./components/ExpensesList/ExpensesList";

function App() {
  const expenses = [
    {
      title: 'Frontend udemy course',
      price: 297,
      date: new Date("3/5/2023")
    },
    {
      title: 'Codeforces GYM',
      price: 45,
      date: new Date("3/5/2023")
    },
    {
      title: '2 USB flash drive',
      price: 300,
      date: new Date("1/5/2023")
    },
    {
      title: 'Laptop holder',
      price: 139,
      date: new Date("2/5/2023")
    }
  ]

  return (
    <div className="App">
      <h2>Our App</h2>
      <ExpensesList expenses={expenses} />
    </div>
  );
}

export default App;
