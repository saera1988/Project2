//this is the component that will displaed on the tab of water
import React, { Component } from "react";

class WaterDrink extends Component {
   render() {
    return (
      <div className="WaterDrinkMain">
        <div className="header">
          {/* user will inter numbers of cup in this form which will call the function addcup */}
          <form onSubmit={this.props.addCup}>
            <input
            // info about input entered by the user
              type="number"
              placeholder="Water Intake"
              ref={this.props.inputElement}
              value={this.props.currentAmount}
              onChange={this.props.handleInput}
            />
            {/* add button add to the list*/}
            <button type="submit" className="Add">
              {" "}
              Add Cups{" "}
            </button>
          </form>
           {/* clear button ,clear whole list*/}
          <button onClick={this.props.clearList} className="Clear">
            Clear List!
          </button>
        </div>
      </div>
    );
  }
}
export default WaterDrink;
