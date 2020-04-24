import React from "react";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Post from "./Component/Post";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/:post_id" component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
