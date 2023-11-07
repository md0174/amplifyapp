import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Navbar1.js';
import Card from './Card1.js';
import Home from './Home.js';
import Contact from './Contact.js';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
    <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/card" element={<Card />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </BrowserRouter>

    </div>
  );
}

export default App;
