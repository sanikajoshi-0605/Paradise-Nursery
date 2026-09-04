import { useState } from "react";
import ProductList from "./ProductList";
import AboutUs from "./AboutUs";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  if (showProducts) {
    return <ProductList />;
  }

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery — your destination for beautiful
          plants for your home and garden.
        </p>

        <button onClick={() => setShowProducts(true)}>
          Get Started
        </button>

        <AboutUs />
      </div>
    </div>
  );
}
const [showProducts, setShowProducts] = useState(false);
<button onClick={() => setShowProducts(true)}>
  Get Started
</button>
export default App;