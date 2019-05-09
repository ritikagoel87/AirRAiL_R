import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {
  render() {
    return (
      <div>
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
