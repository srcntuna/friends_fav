import LoginForm from "./Components/loginForm";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignUpForm from "./Components/signUpForm";
import UserHome from "./Components/UserHome";
import IndvPost from "./Components/indvPost";
import "./Styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <div>WELCOME TO Friend's Favs</div>
      </div>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/register" element={<SignUpForm />} />
        <Route exact path="/home" element={<UserHome />} />
        <Route exact path="/post/:id" element={<IndvPost />} />
      </Routes>
    </div>
  );
}

export default App;
