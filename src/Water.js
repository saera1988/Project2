import React, { Component } from "react";
import WaterDrink from "./WaterDrink";
import "./index.css";
import WaterCups from "./WaterCups";
// import { SSL_OP_SINGLE_ECDH_USE } from "constants";

class Water extends Component {
  constructor() {
    super();
    // state to hold the array of cups  and render elements on the pag
    this.state = {
      cups: [],
      // another state to hold the current value
      currentAmount:  "" 
    };
  }
  // change in the input field.
  handleInput = e => {
    const cupInput = e.target.value;
    const currentAmount = cupInput;
    this.setState({
      currentAmount: currentAmount
    });
  };

  addCup = (e) => {
    // prevent reloading from submitting the form
    e.preventDefault();
    
    const newCup = this.state.currentAmount;
    console.log("state " + newCup);
    if (newCup.text !== "") {
      console.log(newCup);
      // const items = [this.state.items, newCup];
      this.setState({
        cups: [...this.state.cups, newCup],
        currentAmount: newCup
      
      });

    }
   
  };

  clearList = () => {
    this.setState({
      cups: []
    });
  }

  deleteCup = item => {
    const cups= [...this.state.cups];
    const indexOfCup= cups.indexOf(item);
    cups.splice(indexOfCup, 1);
    this.setState({cups});
  };
  
  render() {
    return (
      <div className="Water">
        <WaterDrink
          addCup={this.addCup}
          // inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentAmount={this.state.currentAmount}
          clearList={this.clearList}
        />
      <div>
        <WaterCups 
         data={this.state.cups} deleteCup={this.deleteCup}/>
      </div>
      </div>
    );
  }
}
export default Water;
