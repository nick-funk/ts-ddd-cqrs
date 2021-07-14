import React from "react";

import "./App.css";
import LoginForm from "./login/LoginForm";
import CommentStream from "./comments/CommentStream";

function App() {
  return (
    <div className="App">
      <LoginForm />
      <CommentStream />
    </div>
  );
}

export default App;
