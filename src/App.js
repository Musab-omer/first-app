import './App.css';
import MessageCard from "./components/Pages/MessageCard";
import Product from "./components/Pages/Product";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
       {/* <MessageCard/> */}

       <Product/>
      </header>
    </div>
  );
}

export default App;
