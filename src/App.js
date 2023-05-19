import About from "./components/About";
import Contact from "./components/Contact";
import Countries from "./components/Countries";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <LandingPage/>
        <Countries/>
        <About/>
        <Contact/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
