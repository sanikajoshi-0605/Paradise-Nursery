import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 499,
    category: "Indoor Plants",
    description: "A low-maintenance plant that is perfect for indoor spaces.",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2c2e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 599,
    category: "Indoor Plants",
    description: "A beautiful flowering plant that adds elegance to your home.",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Money Plant",
    price: 299,
    category: "Indoor Plants",
    description: "An easy-to-grow indoor plant known for its attractive leaves.",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "ZZ Plant",
    price: 699,
    category: "Indoor Plants",
    description: "A hardy indoor plant that requires very little maintenance.",
    image:
      "https://images.unsplash.com/photo-1632207691144-3f4e1f0e5c0a?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 549,
    category: "Indoor Plants",
    description: "A popular indoor plant with large, glossy green leaves.",
    image:
      "https://images.unsplash.com/photo-1597055181300-4f90a6d0f4b1?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Areca Palm",
    price: 799,
    category: "Indoor Plants",
    description: "A tropical palm that brings a fresh natural look indoors.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80",
  },

  // Outdoor Plants
  {
    id: 7,
    name: "Rose Plant",
    price: 399,
    category: "Outdoor Plants",
    description: "A classic flowering plant that produces beautiful roses.",
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Hibiscus",
    price: 449,
    category: "Outdoor Plants",
    description: "A colorful flowering plant ideal for gardens and balconies.",
    image:
      "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Jasmine",
    price: 349,
    category: "Outdoor Plants",
    description: "A fragrant flowering plant that adds beauty to outdoor spaces.",
    image:
      "https://images.unsplash.com/photo-1611082332504-2f6a2d3b6e4c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Bougainvillea",
    price: 499,
    category: "Outdoor Plants",
    description: "A vibrant flowering plant perfect for gardens and walls.",
    image:
      "https://images.unsplash.com/photo-1561998338-13ad7883b20f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "Lavender",
    price: 399,
    category: "Outdoor Plants",
    description: "A fragrant plant known for its beautiful purple flowers.",
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "Marigold",
    price: 249,
    category: "Outdoor Plants",
    description: "A bright flowering plant that adds color to any garden.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
  },

  // Succulents
  {
    id: 13,
    name: "Aloe Vera",
    price: 299,
    category: "Succulents",
    description: "A useful and easy-care succulent suitable for indoor spaces.",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Echeveria",
    price: 349,
    category: "Succulents",
    description: "A beautiful rosette-shaped succulent with compact growth.",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "Jade Plant",
    price: 399,
    category: "Succulents",
    description: "A popular succulent with thick, glossy green leaves.",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    name: "Haworthia",
    price: 299,
    category: "Succulents",
    description: "A compact succulent that is easy to maintain indoors.",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Zebra Cactus",
    price: 449,
    category: "Succulents",
    description: "A small striped succulent with a distinctive appearance.",
    image:
      "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "String of Pearls",
    price: 499,
    category: "Succulents",
    description: "A trailing succulent with attractive bead-like leaves.",
    image:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=500&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const categories = [
    ...new Set(plants.map((plant) => plant.category)),
  ];

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>🌿 Paradise Nursery</h2>
        </div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>

          <a href="/cart">
            🛒 Cart ({cartItemCount})
          </a>
        </div>
      </nav>

      {/* Product Page */}
      <main className="product-container">
        <h1>Our Plants</h1>

        <p className="product-intro">
          Explore our collection of beautiful indoor plants,
          outdoor plants, and succulents.
        </p>

        {/* Categories */}
        {categories.map((category) => (
          <section
            className="plant-category"
            key={category}
          >
            <h2>{category}</h2>

            <div className="plant-grid">
              {plants
                .filter(
                  (plant) => plant.category === category
                )
                .map((plant) => (
                  <div
                    className="plant-card"
                    key={plant.id}
                  >
                    {/* Plant Image */}
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />

                    {/* Plant Information */}
                    <div className="plant-details">
                      <h3>{plant.name}</h3>

                      <p className="plant-description">
                        {plant.description}
                      </p>

                      <p className="plant-price">
                        ₹{plant.price}
                      </p>

                      {/* Add to Cart */}
                      <button
                        className="add-to-cart-button"
                        onClick={() =>
                          handleAddToCart(plant)
                        }
                        disabled={isInCart(plant.id)}
                      >
                        {isInCart(plant.id)
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;