import React, { Component } from 'react';
import '../seating.css';
import axios from 'axios'

const SERVER_URL = 'http://localhost:3000/planes.json';

class Seating extends Component {
  constructor() {
    super();

    this.state = {plan_object: []}
    this.state = { planes: [], seat: '' };
    this.changeHandler = this.changeHandler.bind(this);
    this.selectSeat = this.selectSeat.bind(this);

    const fetchPlanes = () => {
      axios.get(  SERVER_URL, { params: { "id": 1 } }).then( ( results ) => {
        this.setState({planes: results.data});
        this.setState({plane_objet: results.data})


       console.log(results.data);
      });
    }
  fetchPlanes();
  }

  selectSeat(e){
    e.preventDefault();
    axios.post(SERVER_URL, {seat: this.state.seat}).then((result) => {
      console.log(result);
      console.log(result.data.filter(e => e.id === this.state.plane_id));
    });
    console.log(this.state.seat);


  }

  changeHandler(e) {
    this.setState({seat: e.target.id});
  }

  render() {
  let logo = require('../logl.svg')
  let planelogo = require('../plane.svg')
    return (

      <div>
    <header>
      <img className="logo"src={logo} />
      <img className="plane"src={planelogo} />
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
        <button>submit</button>
        </form>

    </div>
      </div>
    );
  }
}

export default Seating;
