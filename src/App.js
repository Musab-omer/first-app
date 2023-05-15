//import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
//import LandingPage from "./components/LandingPage";
import LandingPage2 from "./components/LandignPage2";
import CountryCards from "./components/counrties/CountryCards";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar2/>
       <LandingPage2/>
       <CountryCards/>
       <Contact/>
      </header>
    </div>
  );
}

export default App;
