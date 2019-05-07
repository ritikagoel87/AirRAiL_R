import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import Airplane from './components/Airplane';
import Flight from './components/Flight';
import User from './components/User';
import Reservation from './components/Reservation';
import NewReservation from './components/NewReservation';
import Search from './components/Search';
import Itinerary from './components/Itinerary';
import Booking from './components/Booking';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Login } />
      <Route exact path="/airplanes" component={ Airplane } />
      <Route exact path="/flights" component={ Flight } />
      <Route exact path="/users" component={ User } />
      <Route exact path="/reservations" component={ Reservation } />
      <Route exact path="/reservations/:f_id" component={ NewReservation } />
      <Route exact path="/search" component={ Search } />
      <Route exact path="/itinerary/:b_id" component={ Itinerary } />
      <Route exact path="/bookings" component={ Booking } />
    </div>
  </Router>
);

export default Routes;
