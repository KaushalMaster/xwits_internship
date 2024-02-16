import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import AddMeals from "./components/AddMeals/AddMeals";

function App() {
  return (
    <div className="App">
      Meals App
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/add-meals" element={<AddMeals />} />
          <Route path="/cart" element={<h1>Cart</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
