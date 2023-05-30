import './App.css';
import MiddleWareCard from './components/Pages/advanse/MiddelwareCard';
import ParentCoponent from './components/Pages/Basic/ParentCoponent';

import ParentTyping from './components/Pages/mediam/ParentTyping';


import Navbar from "./components/layouts/Navbar";
import ContactApp from './components/Pages/contactApp/ContactApp';


function App() {
  


  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        {/* <ParentCoponent/> */}

        {/* <ParentTyping /> */}

        {/* <MiddleWareCard /> */}

        <ContactApp/>

      </header>
    </div>
  );
}

export default App;
