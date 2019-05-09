import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../seating.css'

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
    const logo = require('../logl.svg')
    const planelogo = require('../plane.svg')
    return (
      <div>
        <header>
        <img className="logo"src={logo} alt="LOL" />
        <img className="plane"src={planelogo} alt="LOL"/>
          </header>
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
          <h2>Login</h2>
        
          <p>Sign In</p>
        </nav>
        <form>

          <br></br>
          <input className="login" name="user_name"type="text" placeholder="User Name" required autoFocus />
          <input className="login" type="text" placeholder="Password" required />
          <Link to={`/search`}>
            <input className="button"  name="submit" type="submit" value="Submit" />
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
