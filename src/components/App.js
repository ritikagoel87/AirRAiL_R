import React from 'react';
import '../seating.css';


function App() {
  const logo = require('../logl.svg')
  const planelogo = require('../plane.svg')
  return (

    <div className="App">
      <header>
        <img className="logo"src={logo} alt="LOL" />
        <img className="plane"src={planelogo} alt="LOL" />
          </header>

      Burning Airlines Coming Soon
    </div>
  );
}

export default App;
