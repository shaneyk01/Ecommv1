import React from 'react';
import './CategorySelect.css';


const CategorySelect = ({ categories, selectedCategory, onChange }) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="category-select-container">
      <label htmlFor="category-select" className="category-label">
        Filter by Category:
      </label>
      <select
        id="category-select"
        className="category-select"
        value={selectedCategory}
        onChange={handleChange}
      >
        <option value="">All Products</option>
        {categories && categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;
