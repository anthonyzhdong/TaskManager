import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/home/Home.jsx';
import './App.css';
import Header from './components/Header.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import AboutPage from './components/about/About.jsx';
import TransactionPage from './components/transactions/TransactionPage.jsx';
import ManageTransactionPage from './components/transactions/ManagetransactionPage.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Routes>
          <Route path = "/" element= {<HomePage/>} />
          <Route path = "/transactionpage" element = {<TransactionPage />}/>
          <Route path = "/about" element = {<AboutPage/>}/>
          <Route path = "/transaction/:slug?" element = {<ManageTransactionPage/>}/>
          <Route path = "*" element = {<PageNotFound/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
