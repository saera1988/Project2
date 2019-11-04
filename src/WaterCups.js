import React, { Component } from 'react'
// const Arr =[];
class WaterCups extends Component {
//   createCups(cup, i) {
//     return (
    
// )
// }
  render() {
  
  // const cupEntries = push(this.props.entries)
    const cupIntak = this.props.data.map((item, i) => {
     return <li key={i} onClick={() => 
        this.props.deleteCup(item)}>
        {item} <span className="material-icons">format_color_reset</span>
      </li>
    })
    return (<ul className="theCups">{cupIntak}</ul>)
  }
}
export default WaterCups;