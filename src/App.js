// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

import './App.css';

import CountryCards from './components/countryCardsComponent/CountryCards';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <nav className="navbar navbar-dark bg-secondary">
        <a href='#' className="navbar-brand text-uppercase font-weight-bold">React With Bootstrap</a>
       </nav>

       <CountryCards/>
      </header>
    </div>
  );
}

export default App;
