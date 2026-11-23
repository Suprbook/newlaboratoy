import "./SearchBar.css";

function SearchBar({
  searchText,
  onSearchChange,
  category,
  onCategoryChange,
  sortOrder,
  onSortChange,
  onClearFilters,
}) {
  return (
    <section className="search-panel" aria-label="Search and filter products">
      <label className="search-field">
        <span>Search products</span>
        <input
          type="search"
          value={searchText}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by product name..."
        />
      </label>

      <label className="filter-field">
        <span>Category</span>
        <select
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <option value="All">All categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="School Supplies">School Supplies</option>
          <option value="Accessories">Accessories</option>
        </select>
      </label>

      <label className="filter-field sort-field">
        <span>Sort by</span>
        <select
          value={sortOrder}
          onChange={(event) => onSortChange(event.target.value)}
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </label>

      <button
        type="button"
        className="clear-filters"
        onClick={onClearFilters}
      >
        Clear Filters
      </button>
    </section>
  );
}

export default SearchBar;
