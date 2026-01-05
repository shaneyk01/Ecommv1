import React from 'react';
import { useImageFallback } from '../utils/imageFallback';
import './ProductCard.css';


const ProductCard = ({ product, onAddToCart }) => {
  const imageSrc = useImageFallback(product.image);

  const handleAddClick = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={imageSrc}
          alt={product.title}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">
          {product.description?.substring(0, 100)}...
        </p>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button
            className="add-to-cart-btn"
            onClick={handleAddClick}
            aria-label={`Add ${product.title} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
