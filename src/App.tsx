import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import PostContainer from "./components/Post/PostContainer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={ Home }/>
        <Route path="/post/:postId" component={ PostContainer }/>
      </BrowserRouter>
    </div>
  );
};

export default App;
