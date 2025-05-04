import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/home/Home';
import './App.css';
import AboutPage from './components/about/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path = "/" element= {<HomePage/>} />
        </Routes>
        <a>
          hi
        </a>
      </header>
    </div>
  );
}

export default App;
