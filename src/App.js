import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Social from './components/Social';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Social/>
      <About/>
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
