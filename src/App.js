import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Home />
     <Skills/>
     <AboutMe />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
