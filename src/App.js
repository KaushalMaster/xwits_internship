// import './App.css';
import CompA from "./components/CompA";
import ExpenseItem from "./components/Expensess/ExpenseItem/ExpenseItem";
import Expenses from "./components/Expensess/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const expenseHandler = (expenseData) => {
    console.log(expenseData);
    const data = {
      ...expenseData,
      id: Math.random().toString(),
    };
    console.log(
      "Data from newexpense is now accessed in parent App.js component"
    );
    console.log(data);
  };
  return (
    <div className="App">
      <NewExpense expense={expenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
