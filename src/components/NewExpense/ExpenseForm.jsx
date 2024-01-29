import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //   const [title, setTitle] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });
    // console.log(userInput["title"]);
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
    console.log(userInput["amount"]);
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...userInput,
        date: event.target.value,
      };
    });
    console.log(userInput["date"]);
  };

  return (
    <>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
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
        <h2>{userInput["title"]}</h2>
        <h2>{userInput["amount"]}</h2>
        <h2>{userInput["date"]}</h2>
      </div>
    </>
  );
};

export default ExpenseForm;
