import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

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
