import React, { Component } from 'react';
import axios from 'axios';

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
    return (
      <div>
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
