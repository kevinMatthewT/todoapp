import "./App.css";
import Title from "./components/Title";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/LoginPage";
import Register from "./components/Register";
import Reset from "./components/reset";
import Dashboard from "./components/dashboard";


function App() {
  return (
    <div className="app">
      <div className="app">
        <Router>
          <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Title />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
