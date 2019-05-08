import React, { Component } from 'react';
import axios from 'axios';

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
    return (
      <div>
        Airplane
      </div>
    );
  }
}

export default Airplane;
