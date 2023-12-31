import React from 'react'

import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import { Globalprovider } from './Context/GlobalState';

function App() {
  
  return (
    <Globalprovider>
    <Header/>
    <div className="container">
    <Balance/>
    <IncomeExpenses/>
    <TransactionList/>
    <AddTransaction/>
    </div>
    </Globalprovider>

 );
}

export default App;
