import { Navbar } from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Work/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";

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
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;
