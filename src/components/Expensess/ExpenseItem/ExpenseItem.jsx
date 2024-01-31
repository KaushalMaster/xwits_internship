import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("cmp called again");

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <div>
      <li>
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
          </div>
          {/* <button onClick={clickHandler}>Update</button> */}
        </Card>
      </li>
    </div>
  );
};

export default ExpenseItem;
