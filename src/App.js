import './App.css';
import DigtalWatch from './components/Pages/DigtalWatch';
import OneComponent from './components/Pages/contextApi/OneComponent';
import UserContext from './components/Pages/contextApi/UserContext';
import Acomponent from './components/Pages/propDrilling/Acomponent';




import Navbar from "./components/layouts/Navbar";
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        firstName: 'Musab',
        lastName: 'Omer',
        gender: 'Male'
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          
          
          {/* ----------- prop drilling example  */}
          {/* <div className='container mt-3'>
            <div className='row'>
              <div className='col'>
                <div className='card'>
                  <div className='card-body bg-primary'>
                    <p className='h4'>App Component</p>
                    <pre>{JSON.stringify(this.state.personalInfo)}</pre>
                    <Acomponent />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* --------- context Api example ------ */}
          {/* <div className='container mt-3'>
            <div className='row'>
              <div className='col'>
                <div className='card'>
                  <div className='card-body bg-primary'>
                    <p className='h4'>App Component</p>
                    <pre>{JSON.stringify(this.state.personalInfo)}</pre>
                    <UserContext.Provider value={this.state.personalInfo}>
                      <OneComponent />
                    </UserContext.Provider>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* ----------- Life cycle example ----------- */}

          <div className='container mt-3'>
            <div className='row'>
              <div className='col'>
                <div className='card text-center text-white'>
                  <div className='card-header bg-dark'>
                    <p className='h3'>Digtal Watch</p>
                  </div>
                  <div className='card-body bg-primary '>
                    
                    <DigtalWatch/>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </header>
      </div>
    );
  }
}
export default App;


