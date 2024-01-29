import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });
    setTitle(event.target.value);
    // console.log(userInput["title"]);
    console.log(title);
  };

  const amountChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
    setAmount(event.target.value);
    // console.log(userInput["amount"]);
    console.log(amount);
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
    // console.log(userInput["date"]);
    setDate(event.target.value);
    console.log(date);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onDataFromExpenseForm(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    // console.log(expenseData);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={title} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={dateChangeHandler}
              min="2019-01-01"
              max="2022-12-31"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
      <div>
        {/* <h2>{userInput["title"]}</h2>
        <h2>{userInput["amount"]}</h2>
        <h2>{userInput["date"]}</h2> */}
        <h2>{title}</h2>
        <h2>{amount}</h2>
        <h2>{date}</h2>
      </div>
    </>
  );
};

export default ExpenseForm;
