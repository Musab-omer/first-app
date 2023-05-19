import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Countries from "./components/pages/Countries";
import Footer from "./components/layouts/Footer";
import LandingPage from "./components/pages/LandingPage";
import Navbar from "./components/layouts/Navbar";




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
