export default function Navbar({ darkMode, onToggleTheme }) {
  return (
    <nav className="navbar">
      <h2>Sapore Italiano</h2>

      <button className="theme-button" onClick={onToggleTheme}>
        {darkMode ? "☀️" : "🌙"}
      </button>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
        <a href="#featured">Special</a>
        <a href="#booking">Booking</a>
      </div>
    </nav>
  );
}
