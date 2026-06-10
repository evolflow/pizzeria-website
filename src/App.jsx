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
        <button>View Menu</button>
      </section>
      <section className="menu" id="menu">
        <p className="small-title">Our Menu</p>

        <h2>Fresh from the oven</h2>

        <div className="menu-grid">
          <div className="menu-card">
            <h3>Margherita</h3>
            <p>Tomato sauce, mozzarella, fresh basil and olive oil.</p>
            <span>€9.50</span>
          </div>

          <div className="menu-card">
            <h3>Diavola</h3>
            <p>Tomato sauce, mozzarella, spicy salami and chili.</p>
            <span>€11.50</span>
          </div>

          <div className="menu-card">
            <h3>Prosciutto</h3>
            <p>Tomato sauce, mozzarella, prosciutto cotto and mushrooms.</p>
            <span>€11.50</span>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="about-content">
          <p className="small-title">About us</p>

          <h2>Inspired by Napoli, made with passion.</h2>

          <p>
            Sapore Italiano is a cozy pizzeria where traditional recipes meet
            warm atmosphere. We prepare our dough slowly, use fresh ingredients
            and bake every pizza in a wood-fired oven.
          </p>
        </div>
        <div className="about-box">
          <h3>Why people love us</h3>

          <ul>
            <li>Fresh handmade dough</li>
            <li>Italian ingredients</li>
            <li>Wood-fired oven</li>
            <li>Cozy family atmosphere</li>
          </ul>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="small-title">Contact</p>

        <h2>Visit us Today</h2>

        <div className="contact-grid">
          <div>
            <h3>Address</h3>
            <p>Napoli Street 24, Prague</p>
          </div>

          <div>
            <h3>Opening Hours</h3>
            <p>Monday - Sunday</p>
            <p>11:00 - 23:00</p>
          </div>

          <div>
            <h3>Phone</h3>
            <p>+420 777 123 456</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Sapore Italiano. Made with passion.</p>
      </footer>
    </div>
  );
}
export default App;
