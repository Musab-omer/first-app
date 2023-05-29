import './App.css';
import ParentCoponent from './components/Pages/Basic/ParentCoponent';
import ParentTyping from './components/Pages/ParentTyping';

import Navbar from "./components/layouts/Navbar";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

       {/* <ParentCoponent/> */}

       <ParentTyping/>
      </header>
    </div>
  );
}

export default App;
