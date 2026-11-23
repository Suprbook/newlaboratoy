import { useEffect, useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  const searchKeyword = debouncedSearch.trim().toLowerCase();
  const filteredProducts = [
    ...products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchKeyword);
      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    }),
  ];

  if (sortOrder === "price-asc") {
    filteredProducts.sort((first, second) => first.price - second.price);
  } else if (sortOrder === "price-desc") {
    filteredProducts.sort((first, second) => second.price - first.price);
  }

  useEffect(() => {
    document.title = `CvSU Mini Store (${filteredProducts.length} results)`;
  }, [filteredProducts.length]);

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

      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
        category={category}
        onCategoryChange={setCategory}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        onClearFilters={() => {
          setSearchText("");
          setDebouncedSearch("");
          setCategory("All");
          setSortOrder("default");
        }}
      />

      <p className="results-count" aria-live="polite">
        Showing {filteredProducts.length} of {products.length} products
      </p>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
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
      ) : (
        <p className="empty-state" role="status">
          No products found. Try a different keyword or category.
        </p>
      )}
    </div>
  );
}

export default App;