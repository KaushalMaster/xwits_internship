import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "../Expensess/ExpenseItem/ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }
  return (
    <div>
      <ul className="expenses-list">
        {props.items.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ExpensesList;
