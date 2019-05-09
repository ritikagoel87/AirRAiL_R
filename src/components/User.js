import React, { Component } from 'react';
import axios from 'axios';
import '../seating.css';

const SERVER_URL = 'http://localhost:3000/users.json';

class User extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };

    const fetchUser = () => {
      axios.get(SERVER_URL).then((results) => {
        this.setState({ users: results.data });

      });
    };

    fetchUser();
  }

  render() {
    const logo = require('../logl.svg')
    const planelogo = require('../plane.svg')
    return (
      <div>
        <header>
        <img className="logo"src={logo} alt="LOL" />
        <img className="plane"src={planelogo} alt="LOL"/>
          </header>
        <h1>All Users</h1>
        <DisplayUsers users={ this.state.users } />
      </div>
    );
  }
};

class DisplayUsers extends Component {
  render() {
    return (
      <div>
        { this.props.users.map( (s) =>
          <p key={ s.id }>{ s.fname }&nbsp;{ s.lname }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ s.email }&nbsp;&nbsp;&nbsp;</p>
        )}
          </div>


    );
  }
}

export default User;
