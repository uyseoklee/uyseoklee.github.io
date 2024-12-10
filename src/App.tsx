import React from "react";
import Profile from "./Components/Profile";
import Resume from "./Components/Resume";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Profile />
      <Resume />
    </div>
  );
};

export default App;
