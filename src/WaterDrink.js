import React, { Component } from 'react'

class WaterDrink extends Component {
  // componentDidUpdate() {
  //   this.props.inputElement.current.focus()
  // }


  render() {
    return (
      <div className="WaterDrinkMain">
        <div className="header">
          <form onSubmit={this.props.addCup}>
            <input 
             type="number" placeholder="Water Intake" 
             ref = {this.props.inputElement} 
             value={this.props.currentAmount}
             onChange={this.props.handleInput}/>
            <button type="submit"> Add Cups </button>
            
          </form>
          <button onClick={this.props.clearList}>
          Clear List!
        </button>
        </div>
      </div>
    )
  }
}
export default WaterDrink