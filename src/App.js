import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Social from './components/Social';
import About from './components/About';
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Social/>
      <About/>
    </div>
  );
}

export default App;
