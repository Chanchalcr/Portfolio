import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import './App.css'
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
