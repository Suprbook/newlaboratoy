import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  // Callback passed down to every ProductCard
  const handleAddToCart = (title) => {
    setCartCount((count) => count + 1);
    setLastAdded(title);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <p className="store-eyebrow">CVSU CAMPUS SHOP</p>
          <h1>CvSU Mini Store</h1>
        </div>
        <span className="store-count">{products.length} products</span>
      </header>

      <p className="cart-message">
        {cartCount === 0
          ? "Your cart is empty."
          : `Items added to cart: ${cartCount} (Last added: ${lastAdded})`}
      </p>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            inStock={product.inStock}
            onAddToCart={handleAddToCart}
          >
            {product.badge && <span>{product.badge}</span>}
          </ProductCard>
        ))}
      </div>
    </div>
  );
}

export default App;