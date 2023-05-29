import './App.css';
import MiddleWareCard from './components/Pages/advanse/MiddelwareCard';
import ParentCoponent from './components/Pages/Basic/ParentCoponent';

import ParentTyping from './components/Pages/mediam/ParentTyping';


import Navbar from "./components/layouts/Navbar";


function App() {
  


  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        {/* <ParentCoponent/> */}

        {/* <ParentTyping /> */}

        <MiddleWareCard />

      </header>
    </div>
  );
}

export default App;
