
import './App.css';
import MessageCard from "./components/MessageCard";
import DataCard from "./components/DataCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href='#'>React with CSS Styles</a>
        </nav>
        <MessageCard/>
        <DataCard/>
      </header>
    </div>
  );
}

export default App;
