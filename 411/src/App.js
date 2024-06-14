import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './home';
import Stories from './stories';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>The 411</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/stories">Stories</Link>
            <a href="#about">About</a>
            <a href="#contacts">Contacts</a>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;