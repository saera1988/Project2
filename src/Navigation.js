import React from 'react';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="https://www.thefitlifepdx.com/">Fit Life</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/netfact">Nutration Fact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/fitness">Fitness</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/water">Water Intake</a>
                    </li>
                </ul>
                <button className="btn btn-outline-success my-2 my-sm-0" type="button">Sign In</button>
            </div>
        </nav>
    );
}

export default Navigation;


// Bootstrap navigational bar which displays the name of the app,
//  menu link, and Sign In/Sign Out links. We’ll be rendering the Menu 
//  link and Sign In/Out buttons conditionally, depending on the user’s status in a later section. But for now, 
// let’s leave the navbar like this.