import React, { Component } from 'react';
import '../seating.css';
import axios from 'axios'

const SERVER_URL = 'http://localhost:3000/reservations.json';
const FLIGHT_SERVER_URL = 'http://localhost:3000/flights.json';
const PLANE_SERVER_URL = 'http://localhost:3000/planes.json';

class Seating extends Component {
  constructor() {
    super();

    this.state = { seat: '', flight_id: 2, user_id: 1, plane_id: 0 };
    this.changeHandler = this.changeHandler.bind(this);
    this.selectSeat = this.selectSeat.bind(this);
    // this.fetchFlights = this.fetchFlights.bind(this);

    const fetchReservations = () => {
      axios.get( SERVER_URL ).then( ( results ) => {
       console.log(results.data);
      });
    }

    const fetchFlights = () => {
      axios.get( FLIGHT_SERVER_URL ).then( ( results ) => {
      let id = 0;
       results.data.filter((flight) => {
         console.log(flight.plane_id);
             if(flight.id === this.state.flight_id) {
               id = flight.plane_id
               console.log(id);
             }
             // return(flight.flight_id === this.state.flight_id)
         });

       console.log(id);
         // console.log(example);
      });
    }
    const fetchPlanes = () => {
      axios.get( PLANE_SERVER_URL ).then( ( results ) => {
       console.log(results.data);
      });
    }
  fetchFlights();
  fetchPlanes();
  fetchReservations();
  }

  changeHandler(e) {
    this.setState({seat: e.target.id});
  }

  selectSeat(e){
    e.preventDefault();
    axios.post(SERVER_URL,
      {user_id: this.state.user_id,
        flight_id: this.state.flight_id,
        seat: this.state.seat}).then((result) => {
    });
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

        <div className="grid-container">
        <form className='seating-grid' onSubmit={this.selectSeat}>
        <div id="F15" className="seat" onClick={this.changeHandler}>F15</div>
        <div id="F16" className="seat" onClick={this.changeHandler}>F16</div>
        <div id="F17" className="seat" onClick={this.changeHandler}>F17</div>

        <div id="E13" className="seat" onClick={this.changeHandler}>E13</div>
        <div id="E14" className="seat" onClick={this.changeHandler}>E14</div>
        <div id="E15" className="seat" onClick={this.changeHandler}>E15</div>

        <div id="D10" className="seat" onClick={this.changeHandler}>D10</div>
        <div id="D11" className="seat" onClick={this.changeHandler}>D11</div>
        <div id="D12" className="seat" onClick={this.changeHandler}>D12</div>

        <div id="C7" className="seat" onClick={this.changeHandler}>C7</div>
        <div id="C8" className="seat" onClick={this.changeHandler}>C8</div>
        <div id="C9" className="seat" onClick={this.changeHandler}>C9</div>

        <div id="B4" className="seat" onClick={this.changeHandler}>B4</div>
        <div id="B5" className="seat" onClick={this.changeHandler}>B5</div>
        <div id="B6" className="seat" onClick={this.changeHandler}>B6</div>

        <div id="A1" className="seat" onClick={this.changeHandler}>A1</div>
        <div id="A2" className="seat" onClick={this.changeHandler}>A2</div>
        <div id="A3" className="seat" onClick={this.changeHandler}>A3</div>
        <button className="seat-button">submit</button>
        </form>

    </div>
      </div>
    );
  }
}

export default Seating;
