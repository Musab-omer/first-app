import './App.css';
import Navbar from "./components/layouts/Navbar";
import ApplyForJob from "./components/Pages/applyForJob";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        <ApplyForJob />
      </header>
    </div>
  );
}

export default App;
