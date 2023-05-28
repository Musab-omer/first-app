import './App.css';
import AuthUser from './components/Pages/AuthUser';
import Navbar from "./components/layouts/Navbar";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

       <AuthUser/>
      </header>
    </div>
  );
}

export default App;
