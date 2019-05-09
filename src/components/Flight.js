import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../seating.css';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/flights.json';

//Parent Comp
class CreateFlight extends Component {
  constructor() {
    super();
    this.state = {
      number: '',
      origin: '',
      destination: '',
      date: '',
      plane_id: ''
    };

    this._handleChangeNumber = this._handleChangeNumber.bind(this);
    this._handleChangeOrigin = this._handleChangeOrigin.bind(this);
    this._handleChangeDestination = this._handleChangeDestination.bind(this);
    this._handleChangeDate = this._handleChangeDate.bind(this);
    this._handleChangePlaneId = this._handleChangePlaneId.bind(this);
    //submit
    this._handleSaveFlight = this._handleSaveFlight.bind(this);
  }
  _handleChangeNumber(e) {
    this.setState( {number: e.target.value} );
  }
  _handleChangeOrigin(e) {
    this.setState( {origin: e.target.value} );
  }
  _handleChangeDestination(e) {
    this.setState( {destination: e.target.value} );
  }
  _handleChangeDate(e) {
    this.setState( {date: e.target.value} );
  }
  _handleChangePlaneId(e) {
    this.setState( {plane_id: e.target.value} );
  }
  //submit
    _handleSaveFlight(e) {
      e.preventDefault();
      this.props.onSubmit( this.state);
    }


  render() {
    return(
      <div>
       <form onSubmit={ this._handleSaveFlight }>
         <label> Number  </label>
         <textarea onChange={ this._handleChangeNumber } value={this.state.number}></textarea>

         <label> Origin   </label>
         <textarea onChange={ this._handleChangeOrigin } value={this.state.origin}></textarea>

         <label> Destination  </label>
         <textarea onChange={ this._handleChangeDestination } value={this.state.destination}></textarea>

         <label> Dates       </label>
         <input type="date" onChange={ this._handleChangeDate } value={this.state.date} />

         <label> PlaneId  </label>
         <textarea onChange={ this._handleChangePlaneId } value={this.state.plane_id}></textarea>
         <br/><br/>
         <input className="button" type="submit" value="Create Plane" />
       </form>
       </div>
    );
  }
};

//Child Comp
class Flight extends Component {
  constructor (){
    super();
    this.state = {
      flights: []
    };
    this.saveFlight = this.saveFlight.bind( this );
    const fetchFlight = () => {
      axios.get(SERVER_URL).then( (results) => {
        this.setState({ flights: results.data });
        setTimeout(fetchFlight, 4000);
      }).catch(err => console.log(err))
    }
    fetchFlight();
  }

  saveFlight(s) {
    axios.post(SERVER_URL, {number: s.number, origin: s.origin, destination: s.destination, date: s.date, plane_id: parseInt(s.plane_id)}).then((results) => {
      console.log("results data: ", results.data);
      this.setState( {flights: [results.data,...this.state.flights]  });
    }).catch(err => console.log(err))
  }
  render(){
    const logo = require('../logl.svg')
    const planelogo = require('../plane.svg')
    return (
      <div>
        <header>
          <img className="logo"src={logo} alt="LOL" />
          <img className="plane"src={planelogo} alt="LOL"/>
            </header>

        <h1>Flight</h1>
        <CreateFlight onSubmit={ this.saveFlight } onSubmit={ this.saveFlight } />
        <Display flights={ this.state.flights } />
      </div>
    )
  }
};

//Displayplanes
class Display extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.flights.map((s) => <p key={s.id}>{s.name}&nbsp;{s.name}&nbsp;{s.number}&nbsp;{s.origin}&nbsp;{s.destination}&nbsp;{s.date}&nbsp;{s.plane_id}</p>)}
          </ul>
      </div>
    );
  }
};

export default Flight;
