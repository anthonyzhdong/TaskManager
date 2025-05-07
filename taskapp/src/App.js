import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/home/Home';
import './App.css';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import AboutPage from './components/about/About';
import TaskPage from './components/tasks/TaskPage.jsx';
import ManageTaskPage from './components/tasks/ManageTaskPage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Routes>
          <Route path = "/" element= {<HomePage/>} />
          <Route path = "/taskpage" element = {<TaskPage />}/>
          <Route path = "/about" element = {<AboutPage/>}/>
          <Route path = "/task/:slug?" element = {<ManageTaskPage/>}/>
          <Route path = "*" element = {<PageNotFound/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
