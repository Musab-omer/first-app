import './App.css';
import AuthUser from './components/Pages/AuthUser';
import EmployeeCard from './components/Pages/EmployeeCard';
import Hobies from './components/Pages/Hobies';
import HobiesRadio from './components/Pages/HobiesRadio';
import Navbar from "./components/layouts/Navbar";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

       {/* <AuthUser/> */}
       {/* <Hobies/> */}
       {/* <HobiesRadio /> */}
       <EmployeeCard/>
      </header>
    </div>
  );
}

export default App;
