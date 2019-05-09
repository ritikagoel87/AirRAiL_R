import React, { Component } from 'react';
import '../seating.css';


class Itinerary extends Component {
  render() {
    const logo = require('../logl.svg')
    const planelogo = require('../plane.svg')
    return (
      <div>
        <header>
          <img className="logo"src={logo} alt="LOL" />
          <img className="plane"src={planelogo} alt="LOL" />
            </header>
        Itinerary
      </div>
    );
  }
}

export default Itinerary;
