import { Navbar } from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Work/Works";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      {/* Menambahkan Component */}
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
    </div>
  );
}

export default App;
