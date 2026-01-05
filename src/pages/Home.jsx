import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useProducts } from '../hooks/useProducts';
import { useCategories } from '../hooks/useCategories';
import { useCategoryProducts } from '../hooks/useCategoryProducts';
import { useSessionPersistence } from '../hooks/useSessionPersistence';
import { addToCart } from '../features/cart/cartSlice';
import ProductCard from '../components/ProductCard';
import CategorySelect from '../components/CategorySelect';
import './Home.css';


const Home = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('');

  useSessionPersistence();


  const { data: allProducts, isLoading: productsLoading, error: productsError } = useProducts();
  const { data: categories, isLoading: categoriesLoading, error: categoriesError } = useCategories();
  const {
    data: categoryProducts,
    isLoading: categoryLoading,
    error: categoryError,
  } = useCategoryProducts(selectedCategory);

  
  const productsToDisplay = selectedCategory ? categoryProducts : allProducts;
  const isLoading = selectedCategory ? categoryLoading : productsLoading;
  const error = selectedCategory ? categoryError : productsError;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="home">
      <div className="home-container">
      
        {!categoriesLoading && !categoriesError && (
          <CategorySelect
            categories={categories || []}
            selectedCategory={selectedCategory}
            onChange={handleCategoryChange}
          />
        )}

     {'}'}
        {isLoading && (
          <div className="loading-state">
            <p>Loading products...</p>
          </div>
        )}

      
        {error && (
          <div className="error-state">
            <p>Error loading products. Please try again later.</p>
            <p className="error-details">{error.message}</p>
          </div>
        )}

       
        {!isLoading && !error && productsToDisplay && productsToDisplay.length > 0 ? (
          <div className="products-grid">
            {productsToDisplay.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          !isLoading &&
          !error && (
            <div className="no-products">
              <p>No products found.</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
