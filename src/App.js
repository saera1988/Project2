import React, { Component } from "react";
import Navigation from "./Navigation";
import Home from "./Home";
// import FoodLog from './Pages/foodLog';
import Water from "./Water";
import Fitness from "./Fitness";
// import MyList from './MyList'
// import Food from './ListItem'
import { BrowserRouter, Route} from "react-router-dom";
// import NetFact from "./NetFact";

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
        {/* to tells React to route all requests coming from NetFact . */}
        {/* <Route exact path="/NetFact" render={(props) => <NetFact {…props}/>}/> */}
      </BrowserRouter>
    );
  }
}

export default App;
