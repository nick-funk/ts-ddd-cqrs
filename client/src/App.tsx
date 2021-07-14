import React from "react";

import "./App.css";
import LoginForm from "./login/LoginForm";
import CommentStream from "./comments/CommentStream";
import CreateCommentForm from "./comments/CreateCommentForm";

function App() {
  return (
    <div className="App flex content-center flex-wrap">
      <div className="w-full">
        <LoginForm />
      </div>
      <div className="w-full">
        <CreateCommentForm />
      </div>
      <div className="w-full">
        <CommentStream />
      </div>
    </div>
  );
}

export default App;
