import './App.css';
import MessageCard from './components/Pages/MessageCard';

import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
       <MessageCard/>
      </header>
    </div>
  );
}

export default App;
