import './App.css';
import CarSelector from './components/Pages/CarSelector';
import MessageCard from './components/Pages/MessageCard';

import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      {/* <MessageCard/> */}

      <CarSelector/>
      </header>
    </div>
  );
}

export default App;
