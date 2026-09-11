import margheritaImg from "../assets/margherita.jpg";
import diavolaImg from "../assets/diavola.jpg";
import prosciuttoImg from "../assets/prosciutto.jpg";

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

export default pizzas;
