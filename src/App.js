
import Footer from "./components/layouts/Footer";

import Navbar from "./components/layouts/Navbar";

// React Router Import

import {Routes,Route} from 'react-router-dom';

//import pages
import LandingPage from "./components/pages/LandingPage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Countries from "./components/pages/Countries";
import NotFoundPage from './components/pages/NotFoundPage';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
       
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/countries" element={<Countries/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
