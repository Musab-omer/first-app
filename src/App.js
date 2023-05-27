import './App.css';
import Navbar from "./components/layouts/Navbar";
import ApplicationForm from './components/Pages/ApplicationForm';
import ApplyForJob from "./components/Pages/applyForJob";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        {/* <ApplyForJob /> */}

        <ApplicationForm/>
      </header>
    </div>
  );
}

export default App;
