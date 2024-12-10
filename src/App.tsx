import React from "react";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Profile />
      <Home />
    </div>
  );
};

export default App;
