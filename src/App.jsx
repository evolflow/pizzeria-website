import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import PizzaCard from "./components/PizzaCard";

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

  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filteredPizzas = pizzas.filter((pizza) => {
    const matchesCategory =
      activeCategory === "all" ||
      (activeCategory === "vegetarian" && pizza.vegetarian) ||
      (activeCategory === "spicy" && pizza.spicy) ||
      (activeCategory === "bestseller" && pizza.bestseller);

    const matchesSearch = pizza.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const [bookingName, setBookingName] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutName, setCheckoutName] = useState("");
  const [checkoutPhone, setCheckoutPhone] = useState("");
  const [checkoutAddress, setCheckoutAddress] = useState("");
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const [orderSuccessMessage, setOrderSuccessMessage] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  const [orderItems, setOrderItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(orderItems));
  }, [orderItems]);

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

  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 11 && currentHour < 23;

  function handleAddToOrder(pizza) {
    setOrderSuccessMessage("");
    const existingItem = orderItems.find((item) => item.name === pizza.name);

    if (existingItem) {
      const updatedItems = orderItems.map((item) =>
        item.name === pizza.name
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

      setOrderItems(updatedItems);
    } else {
      setOrderItems([...orderItems, { ...pizza, quantity: 1 }]);
    }
  }

  function handleRemoveItem(pizzaName) {
    const updatedItems = orderItems.filter((item) => item.name !== pizzaName);
    setOrderItems(updatedItems);
  }

  function handleClearOrder() {
    setOrderItems([]);
    setShowCheckout(false);
    setCheckoutMessage("");
  }

  function handleIncreaseQuantity(pizzaName) {
    const updatedItems = orderItems.map((item) =>
      item.name === pizzaName ? { ...item, quantity: item.quantity + 1 } : item,
    );

    setOrderItems(updatedItems);
  }

  function handleDecreaseQuantity(pizzaName) {
    const updatedItems = orderItems
      .map((item) =>
        item.name === pizzaName
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      )
      .filter((item) => item.quantity > 0);

    setOrderItems(updatedItems);
  }

  const totalPrice = orderItems.reduce((sum, item) => {
    const priceNumber = Number(item.price.replace("€", ""));

    return sum + priceNumber * item.quantity;
  }, 0);

  function handleCheckoutSubmit(event) {
    event.preventDefault();

    if (checkoutName.trim() === "" || checkoutPhone.trim() === "") {
      setCheckoutMessage("Please fill in your name and phone number.");
      return;
    }

    if (deliveryMethod === "delivery" && !checkoutAddress.trim() === "") {
      setCheckoutMessage("Please enter your delivery address");
      return;
    }

    setOrderSuccessMessage(
      `Thank you, ${checkoutName}! Your order has been placed.`,
    );

    setCheckoutMessage("");
    setCheckoutName("");
    setCheckoutPhone("");
    setCheckoutAddress("");
    setDeliveryMethod("delivery");
    setShowCheckout(false);
    setOrderItems([]);
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode(!darkMode)}
      />

      <Hero />

      <section className="featured">
        <p className="small-title">Chef's Choise</p>

        <h2>Pizza of the Week</h2>

        <p>Try our famous Diavola with spicy salami, mozzarela and chili.</p>
      </section>

      <section className="menu" id="menu">
        <p className="small-title">Our Menu</p>

        <h2>Fresh from the oven</h2>

        <p className="menu-count">{pizzas.length} pizzas available</p>

        <input
          className="search-input"
          type="text"
          placeholder="Search pizza..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

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
            <PizzaCard
              key={pizza.name}
              pizza={pizza}
              onAddToOrder={handleAddToOrder}
            />
          ))}
        </div>
      </section>

      <section className="order-summary">
        <p className="small-title">Your Order</p>

        <h2>Order Summary</h2>

        {orderItems.length === 0 ? (
          <p className="empty-order">Your order is empty</p>
        ) : (
          <>
            <p className="order-count">
              {orderItems.reduce((sum, item) => sum + item.quantity, 0)} items
              in your order
            </p>

            <div className="order-list">
              {orderItems.map((item) => (
                <div className="order-item" key={item.name}>
                  <div>
                    <span>{item.name}</span>
                    <div className="quantity-controls">
                      <button onClick={() => handleDecreaseQuantity(item.name)}>
                        -
                      </button>
                      <span>{item.quantity}</span>

                      <button onClick={() => handleIncreaseQuantity(item.name)}>
                        +
                      </button>
                    </div>
                  </div>

                  <strong>
                    €
                    {(
                      Number(item.price.replace("€", "")) * item.quantity
                    ).toFixed(2)}
                  </strong>

                  <button
                    className="remove-button"
                    onClick={() => handleRemoveItem(item.name)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="order-total">
              <span>Total:</span>
              <strong>€{totalPrice.toFixed(2)}</strong>
            </div>

            <button className="clear-order-button" onClick={handleClearOrder}>
              Clear order
            </button>
            <button
              className="checkout-button"
              onClick={() => setShowCheckout((previousValue) => !previousValue)}
            >
              {showCheckout ? "Close checkout" : "Continue to checkout"}
            </button>

            {showCheckout && (
              <form className="checkout-box" onSubmit={handleCheckoutSubmit}>
                <h3>Complete your order</h3>
                <p>Please enter your details.</p>

                <input
                  type="text"
                  placeholder="Your name"
                  value={checkoutName}
                  onChange={(event) => setCheckoutName(event.target.value)}
                />

                <input
                  type="tel"
                  placeholder="Phone number"
                  value={checkoutPhone}
                  onChange={(event) => setCheckoutPhone(event.target.value)}
                />

                <select
                  value={deliveryMethod}
                  onChange={(event) => setDeliveryMethod(event.target.value)}
                >
                  <option value="delivery">Delivery</option>
                  <option value="pickup">Pick-up</option>
                </select>

                {deliveryMethod === "delivery" && (
                  <input
                    type="text"
                    placeholder="Delivery address"
                    value={checkoutAddress}
                    onChange={(event) => setCheckoutAddress(event.target.value)}
                  />
                )}

                <button type="submit" className="checkout-button">
                  Place order
                </button>

                {checkoutMessage && (
                  <p className="checkout-message">{checkoutMessage}</p>
                )}
              </form>
            )}
          </>
        )}

        {orderSuccessMessage && (
          <p className="order-success-message">{orderSuccessMessage}</p>
        )}
      </section>

      <About />

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

        <form className="booking-form" onSubmit={handleBookingSubmit}>
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

            <p className={isOpen ? "open-status" : "closed-status"}>
              {isOpen ? "Open now✅" : "Closed now ❌"}
            </p>
          </div>

          <div>
            <h3>Phone</h3>
            <p>+420 777 123 456</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
