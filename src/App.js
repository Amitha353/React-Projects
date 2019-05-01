import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <p><Link to="/highChart">HighChart Demo</Link></p>
      <p><Link to="/stockChart">HighStock Demo</Link></p>
      <p><Link to="/mapChart">MapChart Demo</Link></p>
      <p><Link to="/ganttChart">GanttChart Demo</Link></p>
      <p><Link to="/lineChart">LineChart Demo</Link></p>
      <p><Link to="/myStockChart">MyStock Chart Demo</Link></p>
    </div>
  );
}

export default App;
