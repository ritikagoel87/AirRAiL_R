import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/users.json';


class SignUp extends Component {
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
        <h1>Sign Up</h1>
        <h1>Sign In</h1>
      </div>
    );
  }
};



class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

class LoginForm extends Component {
  render() {
    return(
      <div>
        <nav>
          <p>Sign Up</p>
          <p>Sign In</p>
        </nav>
        <form>
          <h2>Login</h2>
          <br></br>
          <input name="user_name"type="text" placeholder="User Name" required autoFocus />
          <input type="text" placeholder="Password" required />
          <Link to={`/search`}>
            <input  name="submit" type="submit" value="Submit" />
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
