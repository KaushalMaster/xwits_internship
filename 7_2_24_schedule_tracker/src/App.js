import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { UserProvider } from "./Components/UserContext/UserContext";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="App">
      {/* <ScheduleInput /> */}
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/scheduleform" element={<Form />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
