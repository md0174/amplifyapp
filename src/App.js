import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Navbar1.js';
import Card from './Card1.js';

function App() {
    return (
    <div className="App">
      <Navbar />
      <h1>CS 230L</h1>
      <h2>Section - 002</h2>
      <p>WVU ID: 800313473</p>
      <p>Hi I am Michael Dolan</p>
      <Card />
    </div>
  );
}

export default App;
