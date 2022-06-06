import React from 'react';
import './App.css';
import Segunda from './components/Segunda.js';
import Front from './components/Front.js';
import Navbar from './components/Navbar.js';
import Tercera from './components/Tercera.js';
import "@fontsource/poppins/500.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Front/>
      <Segunda/>
      <Tercera/>
    </div>
  );
}

export default App;
