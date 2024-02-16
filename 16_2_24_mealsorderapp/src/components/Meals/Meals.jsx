import React, { useEffect } from "react";
import "./Meals.css";
import { useNavigate } from "react-router-dom";

const Meals = () => {
  const navigate = useNavigate();

  const loggedInUser = JSON.parse(localStorage.getItem("loggedIn_user"));

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, []);

  const addMeals = () => {
    navigate("/add-meals");
  };
  const logoutUser = () => {
    navigate("/login");
    localStorage.removeItem("loggedIn_user");
  };

  return (
    <div>
      Welcome {loggedInUser}
      <div className="card__container">
        {/* Meal 1 */}
        <div className="meals">
          <div className="meal__name">Cheese Butter Masala</div>
          <div className="meal__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            blanditiis eligendi commodi quis distinctio aliquid optio minima
            omnis modi harum.
          </div>
          <div className="meal__price">Rs.135</div>
          <div className="meal__buybtn">
            <button>Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </div>
        {/* Meal 2 */}
        <div className="meals">
          <div className="meal__name">Cheese Butter Masala</div>
          <div className="meal__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            blanditiis eligendi commodi quis distinctio aliquid optio minima
            omnis modi harum.
          </div>
          <div className="meal__price">Rs.135</div>
          <div className="meal__buybtn">
            <button>Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </div>
        {/* Meal 3 */}
        <div className="meals">
          <div className="meal__name">Cheese Butter Masala</div>
          <div className="meal__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            blanditiis eligendi commodi quis distinctio aliquid optio minima
            omnis modi harum.
          </div>
          <div className="meal__price">Rs.135</div>
          <div className="meal__buybtn">
            <button>Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      {/* Add your Own Meal */}
      <button onClick={addMeals}>Add your Meal</button>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

export default Meals;
