import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

function App() {
  return (
    <div className="App">
      <h2>Our App</h2>
      <ExpenseItem
        title="Frontend udemy course"
        price="297"
        date={new Date("3/5/2023")}
      />
      <ExpenseItem
        title="Codeforces GYM"
        price="45"
        date={new Date("3/5/2023")}
      />
      <ExpenseItem
        title="2 USB flash drive"
        price="300"
        date={new Date("1/5/2023")}
      />
      <ExpenseItem
        title="Laptop holder"
        price="139"
        date={new Date("2/5/2023")}
      />
    </div>
  );
}

export default App;
