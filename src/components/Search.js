import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../seating.css';

class Search extends Component {
  render() {
    const logo = require('../logl.svg')
    const planelogo = require('../plane.svg')
    return (
      <div>
        <header>
        <img className="logo"src={logo} alt="LOL" />
        <img className="plane"src={planelogo} alt="LOL"/>
          </header>
        Search

        <Link to={`/reservations`}>Reservations</Link>

        <Link to={`/flights`}>Flights</Link>

        <Link to={`/airplanes`}>Airplanes</Link>

        <Link to={`/users`}>Users</Link>

      </div>
    );
  }
}

export default Search;
