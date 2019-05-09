import React, { Component } from 'react';
import '../seating.css';


class Booking extends Component {
  render() {
    const logo = require('../logl.svg')
    const planelogo = require('../plane.svg')
    return (
      <div>
        <header>
          <img className="logo"src={logo} alt="LOL" />
          <img className="plane"src={planelogo} alt="LOL" />
            </header>
        Booking
      </div>
    );
  }
}

export default Booking;
