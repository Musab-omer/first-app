import './App.css';
import CustomersCards from './components/Pages/CustomersCards';
import UsersList from './components/Pages/UsersList';
import ContactApp from './components/contact-app/ContactApp';





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

          {/* <UsersList /> */}

          {/* <CustomersCards/> */}

          {/*  ----------- Contact App example -------- */}

          <ContactApp/>
        </header>
      </div>
    );
  }
}
export default App;


