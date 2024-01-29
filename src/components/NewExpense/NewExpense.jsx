import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const dataFromExpenseFormHandler = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.random().toString(),
    };
    //   console.log("call from child expenseform in expense component");
    props.expense(data);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onDataFromExpenseForm={dataFromExpenseFormHandler} />
    </div>
  );
};

export default NewExpense;
