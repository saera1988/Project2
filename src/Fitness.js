import React, { Component } from "react";
import axios from "axios";

class Fitness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activites: "",
      weather: 0
      
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Riyadh&APPID=7efda5368aeb93263e50677873e5cdfc"
      )
      .then(res => {
        this.setState({
            weather : res.data.main.temp-273.15
        })
        console.log(res.data.main.temp-273.15)
      })

      .catch(err => {
        console.log(err);
      });
  }
  render() {
    let message ;
    if(this.state.weather < 18){
      message = " Indoor Workout ,It is too Cold !"
    } else if( 30 > this.state.weather > 18){
      message = " Outdoor Workout ,The weather is nice "
    }else if( 18< this.state.weather < 30){
      message = " Indoor Workout,The weather is too hot  "
    }
    return <div>
      <h1>Staying active no matter what Mother Nature dishes out.</h1>
      <h2> The Weather Today  {this.state.weather} °C </h2>
    <h4> Enjoy your {message}</h4>
    </div>;
  }
}
export default Fitness;
