export default function PizzaCard({ pizza, onAddToOrder }) {
  return (
    <div className="menu-card">
      <img src={pizza.image} alt={pizza.name} />

      <h3>{pizza.name}</h3>

      <p>{pizza.description}</p>

      <div className="card-footer">
        <p className="rating">⭐ {pizza.rating}</p>

        {pizza.bestseller && (
          <span className="best-seller">⭐ Best Seller</span>
        )}

        {pizza.vegetarian && <span className="vegetarian">🥬 Vegetarian</span>}

        {pizza.spicy && <span className="badge">🌶️ Spicy</span>}

        <span className="price">{pizza.price}</span>

        <button className="order-button" onClick={() => onAddToOrder(pizza)}>
          Add to order
        </button>
      </div>
    </div>
  );
}
