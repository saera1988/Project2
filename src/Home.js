import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <h1>Welcome to Fit Life !</h1>
      <br />
      <h3 className="lead">
        Fit Life is all about wellness
        <br />
        and healthyliving.
        <br /> <br />
        The first step to a healthier you<br/> takes less than a minute ...
      </h3><br/>
      <ul>
          <li>Track your daily water intake .</li>
          <li>Suggest physical activity mood according <br/>to the Weather.</li>
      </ul>
    </div>
  );
};

export default Home;

// Home page here is simple stateless functional component that simply displays
//   greeting message.
