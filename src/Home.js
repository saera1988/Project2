import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <h1>Welcome to Fit Life !</h1>
      <br />
      <h2 className="lead">
        Fit Life is all about wellness
        <br />
        and healthyliving.
        <br /> <br />
        The first step to a healthier you<br/> takes less than a minute ...
      </h2><br/>
      <ul className="HomeList">
          <li>Track your daily water intake .</li>
          <li>Suggest physical activity mood <br/>according to the Weather.</li>
      </ul>
    </div>
  );
};

export default Home;

// Home page here is simple stateless functional component that simply displays
//   greeting message.
