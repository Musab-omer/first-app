import './App.css';


import Navbar from "./components/layouts/Navbar";
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Pages/Home';
import Employees from './components/Pages/employees/Employees';
import Stocks from './components/Pages/stocks/Stocks';
import About from './components/Pages/About';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/employees/list' element={<Employees/>}/>
              <Route exact path='/stocks/list' element={<Stocks/>}/>
              <Route exact path='/about' Component={About}/>
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}
export default App;


