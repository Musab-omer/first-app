import MessageCard from "./components/Pages/MessageCard";
import Student from "./components/Pages/Student";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <MessageCard name="Musab" age='32' designation="software engineer"/>
        <MessageCard name="Amna" age='24' designation="doctor"/>
        <MessageCard name="Mohammed" age='26' designation="selse man"/>

        <Student/>
      </header>
    </div>
  );
}

export default App;
