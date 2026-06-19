import { useState } from "react";
import "./App.css";

import margheritaImg from "./assets/margherita.jpg";
import diavolaImg from "./assets/diavola.jpg";
import prosciuttoImg from "./assets/prosciutto.jpg";

const pizzas = [
  {
    name: "Margherita",
    description: "Tomato sauce, mozzarella, fresh basil and olive oil.",
    price: "€9.50",
    image: margheritaImg,
    rating: 4.9,
    spicy: false,
    bestseller: true,
    vegetarian: true,
  },
  {
    name: "Diavola",
    description: "Tomato sauce, mozzarella, spicy salami and chili.",
    price: "€11.50",
    image: diavolaImg,
    rating: 4.8,
    spicy: true,
    bestseller: true,
    vegetarian: false,
  },
  {
    name: "Prosciutto",
    description: "Tomato sauce, mozzarella, prosciutto cotto and mushrooms.",
    price: "€12.50",
    image: prosciuttoImg,
    rating: 4.7,
    spicy: false,
    bestseller: false,
    vegetarian: false,
  },
];

function App() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPizzas = pizzas.filter((pizza) => {
    if (activeCategory === "vegetarian") {
      return pizza.vegetarian;
    }

    if (activeCategory === "spicy") {
      return pizza.spicy;
    }

    if (activeCategory === "bestseller") {
      return pizza.bestseller;
    }

    return true;
  });

  const [bookingName, setBookingName] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");

  function handleBookingSubmit(event) {
    event.preventDefault();

    if (bookingName.trim() === "") {
      setBookingMessage("Please enter your name.");
      return;
    }

    setBookingMessage(
      `Thank you, ${bookingName}! Your table request was sent.`,
    );
    setBookingName("");
  }
  return (
    <div className="app">
      <nav className="navbar">
        <h2>Sapore Italiano</h2>

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

      <section className="hero" id="home">
        <p className="small-title">Authentic Italian Pizzeria</p>

        <h1>Wood-fired pizza, fresh ingredients, real Italian taste.</h1>

        <p className="hero-text">
          A cozy Italian restaurant inspired by Napoli, created for people who
          love pizza, pasta, wine and warm atmosphere.
        </p>

        <a href="#menu" className="cta-button">
          View Menu
        </a>
      </section>

      <section className="featured">
        <p className="small-title">Chef's Choise</p>

        <h2>Pizza of the Week</h2>

        <p>Try our famous Diavola with spicy salami, mozzarela and chili.</p>
      </section>

      <section className="menu" id="menu">
        <p className="small-title">Our Menu</p>

        <h2>Fresh from the oven</h2>

        <p className="menu-count">{pizzas.length} pizzas available</p>

        <div className="filter-buttons">
          <button
            className={activeCategory === "all" ? "active-filter" : ""}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          <button
            className={activeCategory === "vegetarian" ? "active-filter" : ""}
            onClick={() => setActiveCategory("vegetarian")}
          >
            Vegetarian
          </button>
          <button
            className={activeCategory === "spicy" ? "active-filter" : ""}
            onClick={() => setActiveCategory("spicy")}
          >
            Spicy
          </button>
          <button
            className={activeCategory === "bestseller" ? "active-filter" : ""}
            onClick={() => setActiveCategory("bestseller")}
          >
            Best Seller
          </button>
        </div>

        <div className="menu-grid">
          {filteredPizzas.map((pizza) => (
            <div className="menu-card" key={pizza.name}>
              <img src={pizza.image} alt={pizza.name} />

              <h3>{pizza.name}</h3>

              <p>{pizza.description}</p>

              <div className="card-footer">
                <p className="rating">⭐ {pizza.rating}</p>

                {pizza.bestseller && (
                  <span className="best-seller">⭐ Best Seller</span>
                )}

                {pizza.vegetarian && (
                  <span className="vegetarian">🥬 Vegetarian</span>
                )}

                {pizza.spicy && <span className="badge">🌶️ Spicy</span>}

                <span className="price">{pizza.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-content">
          <p className="small-title">About Us</p>

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

      <section className="gallery" id="gallery">
        <p className="small-title">Gallery</p>

        <h2>Inside Sapore Italiano</h2>

        <div className="gallery-grid">
          <img src={margheritaImg} alt="Pizza" />
          <img src={diavolaImg} alt="Pizza" />
          <img src={prosciuttoImg} alt="Pizza" />
        </div>
      </section>

      <section className="reviews">
        <p className="small-title">Reviews</p>
        <h2>What our customers say</h2>

        <div className="reviews-grid">
          <div className="review-card">
            <p>
              Amazing pizza and great atmosphere. The best Italian restaurant in
              Prague.
            </p>

            <h4>⭐ ⭐ ⭐ ⭐ ⭐</h4>

            <span>John D.</span>
          </div>

          <div className="review-card">
            <p>Fresh ingredients, friendly staff and authentic taste.</p>

            <h4>⭐ ⭐ ⭐ ⭐ ⭐</h4>

            <span>Maria K.</span>
          </div>

          <div className="review-card">
            <p>I come here every week. Diavola is my favorite pizza.</p>

            <h4>⭐ ⭐ ⭐ ⭐ ⭐</h4>

            <span>Alex P.</span>
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <p className="small-title">Reservation</p>

        <h2>Book a table</h2>

        <form className="booking-form" onSumbit={handleBookingSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={bookingName}
            onChange={(event) => setBookingName(event.target.value)}
          />

          <button type="submit">Send request</button>
        </form>

        {bookingMessage && <p className="booking-message">{bookingMessage}</p>}
      </section>

      <section className="contact" id="contact">
        <p className="small-title">Contact</p>

        <h2>Visit us today</h2>

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
