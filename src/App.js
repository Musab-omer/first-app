import './App.css';
import GithubSearchApp from './components/Pages/GithubSearchApp';

import Navbar from "./components/layouts/Navbar";
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />

          {/* ----------------GitHub Serach App --------- */}
          <GithubSearchApp/>
        </header>
      </div>
    );
  }
}
export default App;


