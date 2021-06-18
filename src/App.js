import React, { useEffect } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Balance from './components/Balance'
import AccountSummary from './components/AccountSummary'
import TransactionHistory from './components/TransactionHistory'
import AddTransaction from './components/AddTransaction'
import './App.css'
function App() {
  return (
    <div className='app'>
        <Header/>
        <div className="container">
          <Balance/>
          <AccountSummary/>
          <TransactionHistory/>
          <AddTransaction/>
        </div>
    </div>
  );
}

export default App;
