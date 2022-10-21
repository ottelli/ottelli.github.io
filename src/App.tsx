import { Outlet, Link } from 'react-router-dom';
import './App.css';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/"><h1>Rho Technologies</h1></Link>
      </header>
      <nav className="App-navigation">
        <Link to="/persistence"><h3>Persistence</h3></Link>
        <Link to="/patches"><h3>Patches</h3></Link>
        <Link to="/sense"><h3>Sense</h3></Link>
      </nav>
      <section className="App-body">
        <Outlet />
      </section>
      <footer className="App-footer">
        <b>Rho Technologies Ltd</b>
        <Link to="/contact">Contact</Link>
      </footer>
    </div>
  );
}

export default App;
