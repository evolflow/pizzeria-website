import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>Sapore Italiano</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <p className="small-title">Authentic Italian Pizzeria</p>

        <h1>Wood-fired pizza, fresh ingredients, real Italian taste.</h1>

        <p className="hero-text">
          A cozy Italian restaurant inspired by Napoli, created for people who
          love pizza, pasta, wine and warm atmosphere.
        </p>
        <button>Viev Menu</button>
      </section>
    </div>
  );
}
export default App;
