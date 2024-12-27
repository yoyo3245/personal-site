import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <nav className="navbar">
        <div className="nav-left">
          <a className="nav-item" href="https://linkedin.com/in/yosephendawoke" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a className="nav-item" href="https://github.com/yoyo3245" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a className="nav-item" href="https://github.com/yoyo3245" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        
        <div className="nav-title">Yoseph Endawoke</div>
        
        <div className="nav-right">
          <a className="nav-item">About</a>
          <a className="nav-item">Projects</a>
          <a className="nav-item">Resume</a>
          <a className="nav-item">Contact</a>
        </div>
      </nav>

      <header className="Home">
        <p>
          Yoseph Personal Site!!!
        </p>
      </header>
    </div>
  );
}

export default App;
