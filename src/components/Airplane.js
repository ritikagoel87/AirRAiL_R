import React, { Component } from 'react';
import axios from 'axios';
import '../seating.css';


const SERVER_URL = 'http://localhost:3000/planes.json';
const DELETE_PLANE_URL = 'http://localhost:3000/planes/';

class Airplane extends Component {
  constructor() {
    super();
    this.state = {
      planes: []
    };
    this.savePlane = this.savePlane.bind(this);
    this.deletePlane = this.deletePlane.bind(this);

    this.fetchPlanes();
  }

  fetchPlanes() {
    axios.get( SERVER_URL ).then( ( results) => {
      console.log(results.data);
      this.setState({planes: results.data});
    });
  }

  savePlane( n, s, r, c ) {
    console.log(n, s, r, c);
    axios.post( SERVER_URL, {name: n, seats: s, rows: r, columns: c}).then( (results) => {
      // console.log(results);
      this.fetchPlanes();
    } );
  }

  deletePlane( id ) {
    axios.delete( `${ DELETE_PLANE_URL }${ id }.json` ).then( (results) => {
      console.log(results);
      this.fetchPlanes();
    })
  }

  render() {
    const logo = require('../logl.svg')
    const planelogo = require('../plane.svg')
    return (
      <div>
        <header>
          <img className="logo"src={logo} alt="LOL" />
          <img className="plane"src={planelogo} alt="LOL" />
            </header>
        <h2>All Planes</h2>
        <AllPlanes planes={this.state.planes} onDelete={this.deletePlane} />
        <NewPlane onSubmit={this.savePlane} />
      </div>
    );
  }
}

class AllPlanes extends Component {
  constructor() {
    super();
    this.deleteClicked = this.deleteClicked.bind(this);
  }
  deleteClicked( event ) {
    this.props.onDelete( event.target.id );
  };

  render() {
    return (
      <div>
        { this.props.planes.map( (p) =>
          <div key={ p.id }>
            <p>{ p.name } with { p.seats } seats. <button className="buttonnn" onClick={ this.deleteClicked } id={ p.id }>Delete</button></p>
          </div>
        ) }
      </div>
    )
  }
};

class NewPlane extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      seats: 0,
      rows: 0,
      columns: 0
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleName = this._handleName.bind(this);
    this._handleSeats = this._handleSeats.bind(this);
    this._handleRows = this._handleRows.bind(this);
    this._handleColumns = this._handleColumns.bind(this);
  }

  _handleSubmit( event ){
    event.preventDefault();
    this.props.onSubmit( this.state.name, this.state.seats, this.state.rows, this.state.columns );
    this.setState({name: '', seats: 0, rows: 0, columns: 0 });
  }

  _handleName( event ){
    this.setState({ name: event.target.value });
  }

  _handleSeats( event ){
    this.setState({ seats: event.target.value });
  }

  _handleRows( event ){
    this.setState({ rows: event.target.value });
  }

  _handleColumns( event ){
    this.setState({ columns: event.target.value });
  }

  render() {
    return (
      <div>
        <h3>Add New Plane</h3>
        <form onSubmit={ this._handleSubmit }>
          <label value="Name">Name</label>
          <input type="text" name="name" placeholder="Enter name" onInput={ this._handleName } required />
          <label value="Seats">Seats</label>
          <input type="text" name="seats" placeholder="Enter seats" onInput={ this._handleSeats } required />
          <label value="Rows">Rows</label>
          <input type="text" name="rows" placeholder="Enter rows" onInput={ this._handleRows } required />
          <label value="Columns">Columns</label>
          <input type="text" name="columns" placeholder="Enter columns" onInput={ this._handleColumns } required />
          <button className="button2" type="submit">Add</button>
        </form>
      </div>
    );
  }
};

export default Airplane;
