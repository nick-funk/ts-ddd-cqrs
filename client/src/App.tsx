import React from "react";

import "./App.css";
import LoginForm from "./login/LoginForm";
import getBackendURL from "./getBackendURL";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {getBackendURL()}
        </p>
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
