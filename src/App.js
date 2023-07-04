import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe /> 
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
