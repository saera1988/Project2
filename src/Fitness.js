//this page will use api weather to display the weather and 
//tell the user to do indoor or outdoor workout 

import React, { Component } from "react";
import axios from "axios";


class Fitness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: 0,
      main:"",
       icons : {
        Clear: '☀',
        Rain: '️🌧',
        Storm: '⛈',
        Snow: '🌨',
        Mist: '🌫',
        Clouds: '☁',
      }
 
    };
  }

  componentDidMount() {
    axios
    // Make a request for a user with a given ID
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Riyadh&APPID=7efda5368aeb93263e50677873e5cdfc"
      )
      //response 
      .then(res => {
           // handle success
           console.log(res.data);
           
           let weather = (res.data.main.temp-273.15).toFixed(0)
        this.setState({
            weather : weather,
            main: res.data.weather[0].main,
            // pre:res.data.main.pressure
        })
        console.log(res.data.main.temp-273.15)
      })

      .catch(err => {
            // handle error
        console.log(err);
      });
  }
  render() {
    // varible to store the message to desply later
    console.log(this.state.icons[this.state.main]);
    
    let message ;
  
    // check with workout suit the weather condtion with if 
    if(this.state.weather < 18){
      message = " Indoor Workout "
    
    } else if( 30 <this.state.weather){
      message = " Outdoor Workout "
    }else if( 18< this.state.weather <30){
      message = "Outdoor Workout"
    }
    return <div >
      <h1 className="FitnessHead"> Staying Active No<br/>Matter
What Mother <br/>Nature Dishes Out..</h1>
      {/* // data from api will desplay here  */}
      <br/>
      <h2 className="Weather">  The Weather Today <br/> {this.state.weather} °C {this.state.icons[this.state.main]}</h2>
      <br/>
    <h4 className="Message">  Enjoy your {message}</h4>
 
    </div>;
  }
}
export default Fitness;
