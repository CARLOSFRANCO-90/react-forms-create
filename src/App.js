import React from 'react';
import './App.css';
import MotorCycle from './pages/components/MotorCycle/motorcycle';

import Vehicles from './pages/components/Vehicle/vehicle';


function App() {
  return (
    
    <div className="App">
      <Vehicles/>
      <MotorCycle/>
    </div>
  );
}

export default App;