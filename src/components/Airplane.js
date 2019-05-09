import React, { Component } from 'react';
import axios from 'axios';
import '../seating.css';


const SERVER_URL = 'http://localhost:3000/plane.json';

class Airplane extends Component {
  constructor() {
    super();
    this.state = { planes: [] };

    const fetchPlanes = () => {
      axios.get( SERVER_URL ).then( ( results) => {
        this.setState({planes: results.data});
      });
    }

  }

  render() {
    const logo = require('../logl.svg')
    const planelogo = require('../plane.svg')
    return (
      <div>
        <header>
          <img className="logo"src={logo} alt="LOL" />
          <img className="plane"src={planelogo} alt="LOL" />
            </header>
        Airplane
      </div>
    );
  }
}

export default Airplane;
