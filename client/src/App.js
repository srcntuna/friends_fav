import LoginForm from "./Components/loginForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignUpForm from "./Components/signUpForm";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/register" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
