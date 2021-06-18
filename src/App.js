import React, { useEffect } from "react";
import Header from './components/Header'
import AccountSummary from './components/AccountSummary'
import TransactionHistory from './components/TransactionHistory'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from "./context/GlobalState";
import './App.css'
function App() {
  return (
    <GlobalProvider>
        <Header/>
        <div className="container">
          <AccountSummary/>
          <TransactionHistory/>
          <AddTransaction/>
        </div>
    </GlobalProvider>
  );
}

export default App;
