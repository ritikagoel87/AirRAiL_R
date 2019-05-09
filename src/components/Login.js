import React, { Component } from 'react';
<<<<<<< HEAD
import '../seating.css';
=======
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

>>>>>>> f27c15d80fa23443fa7402dd8806ac1a2cf49e62


class Login extends Component {
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
        Login
=======
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
>>>>>>> f27c15d80fa23443fa7402dd8806ac1a2cf49e62
      </div>
    );
  }
}

export default Login;
