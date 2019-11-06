// Water represent the main (parent)page
import React, { Component } from "react";
import WaterDrink from "./WaterDrink";
import "./index.css";
import WaterCups from "./WaterCups";

class Water extends Component {
  constructor() {
    super();
    // state to hold the array of cups to render elements 
    this.state = {
      cups: [],
      // another state to hold the current value
      currentAmount:  "" , 
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

  // add cups 
  addCup = (e) => {
    // prevent reloading from submitting the form
    e.preventDefault();
    
    const newCup = this.state.currentAmount;
    console.log("state " + newCup);
    if(!newCup || newCup < 1) {
      this.setState({
        cups: [...this.state.cups],
        currentAmount: ""
      
      });
    } else {
      console.log(newCup);
      // const items = [this.state.items, newCup];
      this.setState({
        cups: [...this.state.cups, newCup],
        currentAmount: newCup
      
      });
    }
   
  };

  // clear the whole list 
  clearList = () => {
    this.setState({
      cups: []
    });
  }

  // to modify and delet some items from the list 
  deleteCup = item => {
    const cups= [...this.state.cups]; //copy from cups array
    const indexOfCup= cups.indexOf(item); //find the index of the 2nd cpoy 
    cups.splice(indexOfCup, 1);
    this.setState({cups});
  };
  
  
  render() {
    return (
      <div className="Water">
        <label  className="file" for="file">H2O Goal:</label>
      <progress  className="Progress" value={this.state.cups.join("+")} max="8"></progress>
        <WaterDrink
          addCup={this.addCup}
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
