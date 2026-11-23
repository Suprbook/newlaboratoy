import "./ProductCard.css";

function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children,
}) {
  return (
    <article className={`product-card ${inStock ? "" : "out-of-stock"}`}>
      <div className="card-heading">
        <span className="category">{category}</span>
        {children && <div className="card-badge">{children}</div>}
      </div>

      <h2>{title}</h2>

      <p className="price">₱{price.toFixed(2)}</p>

      <span className={`stock-label ${inStock ? "in-stock" : "unavailable"}`}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>

      <button
        type="button"
        className="add-to-cart"
        disabled={!inStock}
        onClick={() => onAddToCart(title)}
      >
        Add to Cart
      </button>
    </article>
  );
}

export default ProductCard;
