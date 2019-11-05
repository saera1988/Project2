import React, { Component } from "react";
// const Arr =[];
class WaterCups extends Component {
  render() {
    // etration throught the array of cups
    const cupIntak = this.props.data.map((item, i) => {
      return (
        //display input which is array in list
        <ul key={i}>
          <span id="listedCups">{item} Cups </span>
          {/* icon used as button to delet some items in list  */}
          {/* delet one item or modify the list  */}
          <button
            onClick={() => this.props.deleteCup(item)}
            className="material-icons"
          >
            format_color_reset
          </button>
          {/* display time and date  */}
          <span className="Date">{new Date().toTimeString()}</span>
        </ul>
      );
    });
    //display input which is array in list
    return <ul className="theCups">{cupIntak}</ul>;
  }
}
export default WaterCups;
