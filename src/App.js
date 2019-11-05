import React, { Component } from "react";
import Navigation from "./Navigation";
import Home from "./Home";
import Water from "./Water";
import Fitness from "./Fitness";
import { BrowserRouter, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      // BrowserRouter to enable routing within the application
      <BrowserRouter>
        <Navigation />
        <Route exact path="/" component={Home} />
        {/* <Route path="/NetFact" component={NetFact} /> */}
        <Route path="/water" component={Water} />
        <Route path="/fitness" component={Fitness} />
    
      </BrowserRouter>
    );
  }
}

export default App;
