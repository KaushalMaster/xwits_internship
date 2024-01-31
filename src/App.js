// import './App.css';
import { useState } from "react";
import CompA from "./components/CompA";
import ExpenseItem from "./components/Expensess/ExpenseItem/ExpenseItem";
import Expenses from "./components/Expensess/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Onboarding from "./components/OnBoardingPage/Onboarding";
import SignIn from "./components/SignIn/SignIn";

const DUMMY_EXPENSES = [
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

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevState) => {
      return [
        {
          id: Math.random().toString(),
          ...expenseData,
        },
        ...prevState,
      ];
    });
  };
  return (
    <div className="App">
      {/* <SignIn /> */}
      {/* <Onboarding /> */}
      <NewExpense expense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
