import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import data from "../../Context/auth-context";

const Home = (props) => {
  const ctx = useContext(data);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <button onClick={ctx.onLogout}>Logout</button>
    </Card>
  );
};

export default Home;
