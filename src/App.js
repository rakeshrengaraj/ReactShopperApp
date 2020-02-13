import React from 'react';
import './App.css';
import Grocery from './components/Grocery';
import ShoppingBag from './components/ShoppingBag';
import Stats from './components/Stats';
import PocketMoney from './components/PocketMoney';

function App() {
  return (
    <div className="container">
      <div className="jumbotron text-center">
        <div className="container">
          <h2 className="display-4">Grocery Shop</h2>
          <p className="lead">This is a simple grocery shop app, where you can buy your daily products.</p>
        </div>
      </div>

      <div className="row">
        <div className="col">
            <div className="text-center align-items-center">
              <PocketMoney></PocketMoney>
            </div>
        </div>
    </div>

      <div className="row">
        <Grocery></Grocery>
        <ShoppingBag></ShoppingBag>
        <Stats></Stats>
      </div>
    </div>
  );
}

export default App;
