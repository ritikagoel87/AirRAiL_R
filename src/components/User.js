import React, { Component } from 'react';
<<<<<<< HEAD
import '../seating.css';

=======
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/users.json';
>>>>>>> f27c15d80fa23443fa7402dd8806ac1a2cf49e62

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
<<<<<<< HEAD
        <header>
          <img className="logo"src={logo} alt="LOL" />
          <img className="plane"src={planelogo} alt="LOL" />
            </header>
        User
=======
        <h1>All Users</h1>
        <DisplayUsers users={ this.state.users } />
>>>>>>> f27c15d80fa23443fa7402dd8806ac1a2cf49e62
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
