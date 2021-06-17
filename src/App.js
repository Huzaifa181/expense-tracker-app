import React, { useEffect } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Balance from './components/Balance'

function App() {
  return (
    <div className='app'>
        <Header/>
        <div className="container">
          <Balance/>
        </div>
    </div>
  );
}

export default App;
