import React, { Component } from 'react';
<<<<<<< HEAD
import '../seating.css';

=======
import { Link } from 'react-router-dom';
>>>>>>> f27c15d80fa23443fa7402dd8806ac1a2cf49e62

class Search extends Component {
  render() {
    const logo = require('../logl.svg')
    const planelogo = require('../plane.svg')
    return (
      <div>
        <header>
          <img className="logo"src={logo} alt="LOL" />
          <img className="plane"src={planelogo} alt="LOL" />
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
