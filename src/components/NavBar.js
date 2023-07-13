import { useRef } from "react";
import "./NavBar.css";

function NavBar() {
  const navRef = useRef();
  const hamburgerRef = useRef();
  const navMenuRef = useRef();


  function showHamburger() {
    navRef.current.classList.toggle("active")
    hamburgerRef.current.classList.toggle("active")
    navMenuRef.current.classList.toggle("active")
  }

  function hideNavMenu() {
    navMenuRef.current.classList.toggle("active")
    navRef.current.classList.toggle("active")
    hamburgerRef.current.classList.toggle("active")
  }

  return (
    <header>
      <nav ref={navRef} className="container-navbar">
        <div className="container-logo">
          <div className="navbar-name"><span className="navbar-initial">J</span>akob <span className="navbar-initial">S</span>havinski</div>
        </div>
        <div>
          <ul ref={navMenuRef} className="nav-menu">
            <div>
              <ul>
                <li className="nav-item"><a href="#home" aria-label='Link to go back to top of webpage also called home' className="nav-link" onClick={hideNavMenu}>Home</a></li>
              </ul>
            </div>
            <li className="nav-item"><a href="#aboutme" aria-label='Link to go to about me section on webpage' className="nav-link" onClick={hideNavMenu}>About Me</a></li>
            <li className="nav-item"><a href="#skills" aria-label='Link to go to skills section on webpage' className="nav-link" onClick={hideNavMenu}>Skills</a></li>
            <li className="nav-item"><a href="#projects" aria-label='Link to go to projects section on webpage' className="nav-link" onClick={hideNavMenu}>Projects</a></li>
            <li className="nav-item"><a href="#contact" aria-label='Link to go to contact me section on webpage' className="nav-link" onClick={hideNavMenu}>Contact</a></li>
          </ul>
          <div ref={hamburgerRef} className="hamburger" onClick={showHamburger}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
