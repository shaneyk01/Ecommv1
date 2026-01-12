# 🛍️ FakeStore E-Commerce

A modern, responsive e-commerce application built with React, Redux Toolkit, and the FakeStore API. This project demonstrates best practices in state management, API integration, and modern React development patterns.

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-1.9.7-purple?logo=redux)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)
![React Query](https://img.shields.io/badge/React_Query-5.0.0-FF4154?logo=react-query)

## ✨ Features

### 🛒 Shopping Cart
- **Add to Cart**: Easily add products to your shopping cart
- **Real-time Updates**: Cart count updates instantly in the navigation
- **Quantity Management**: Increase, decrease, or remove items from cart
- **Persistent State**: Cart persists across browser sessions using Redux and session storage
- **Total Calculation**: Automatic calculation of cart totals

### 📦 Product Browsing
- **Product Catalog**: Browse a wide range of products from the FakeStore API
- **Category Filtering**: Filter products by categories (Electronics, Jewelry, Men's Clothing, Women's Clothing)
- **Product Cards**: Beautiful, responsive product cards with images and pricing
- **Image Fallback**: Graceful handling of missing or broken product images

### 🎨 User Interface
- **Responsive Design**: Mobile-first design that works on all screen sizes
- **Modern UI**: Clean and intuitive interface
- **Navigation**: Easy navigation between Home and Cart pages
- **Loading States**: Smooth loading indicators during data fetching
- **Error Handling**: User-friendly error messages

### 🔧 Technical Features
- **React Query**: Efficient data fetching and caching
- **Redux Toolkit**: Predictable state management for cart functionality
- **React Router**: Client-side routing for seamless navigation
- **Custom Hooks**: Reusable hooks for products, categories, and session persistence
- **Axios**: Robust HTTP client with error handling
- **Vite**: Lightning-fast development server and build tool

## 🚀 Getting Started

### Prerequisites

Before running this application, make sure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Ecommv1.git
   cd Ecommv1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open your browser**
   
   The application will be available at `http://localhost:5173`

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode with hot module replacement (HMR).  
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### `npm run build`
Builds the app for production to the `dist` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`
Locally preview the production build.  
Run this after `npm run build` to test the production version.

### `npm run lint`
Runs ESLint to check for code quality issues.

## 🏗️ Project Structure

```
Ecommv1/
├── src/
│   ├── api/                    # API integration layer
│   │   └── products.js         # FakeStore API endpoints
│   ├── components/             # Reusable React components
│   │   ├── CartItem.jsx        # Individual cart item component
│   │   ├── CategorySelect.jsx  # Category filter dropdown
│   │   └── ProductCard.jsx     # Product display card
│   ├── features/               # Redux features
│   │   └── cart/
│   │       └── cartSlice.js    # Cart state management
│   ├── hooks/                  # Custom React hooks
│   │   ├── useCategories.js    # Fetch categories
│   │   ├── useCategoryProducts.js # Fetch products by category
│   │   ├── useProducts.js      # Fetch all products
│   │   └── useSessionPersistence.js # Session storage sync
│   ├── pages/                  # Page components
│   │   ├── Home.jsx            # Home/Products page
│   │   └── Cart.jsx            # Shopping cart page
│   ├── store/                  # Redux store configuration
│   │   └── store.js
│   ├── utils/                  # Utility functions
│   │   └── imageFallback.jsx   # Image loading fallback
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Application entry point
├── index.html                  # HTML template
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
└── README.md                   # You are here!
```

## 🛠️ Technologies Used

### Core
- **React** (18.2.0) - UI library for building user interfaces
- **React Router DOM** (6.18.0) - Declarative routing for React
- **Redux Toolkit** (1.9.7) - State management
- **React Redux** (8.1.3) - Official React bindings for Redux

### Data Fetching & API
- **React Query** (@tanstack/react-query 5.0.0) - Data fetching and caching
- **Axios** (1.6.0) - HTTP client for API requests
- **FakeStore API** - Mock e-commerce API

### Build Tools
- **Vite** (5.0.8) - Next-generation frontend build tool
- **@vitejs/plugin-react** (4.2.1) - React plugin for Vite

## 🎯 Key Components

### 🏠 Home Page
The main landing page displaying:
- Product catalog with all available items
- Category filter dropdown
- Add to cart functionality for each product
- Responsive grid layout

### 🛒 Cart Page
Shopping cart interface featuring:
- List of added items with images and details
- Quantity adjustment controls (increase/decrease)
- Remove item functionality
- Total price calculation
- Empty cart state

### 📦 Product Card
Reusable component showing:
- Product image with fallback handling
- Product title and description
- Price display
- Add to cart button

### 🎨 Cart Item
Cart-specific component with:
- Item details and thumbnail
- Quantity controls
- Price per item and subtotal
- Remove button

## 🔌 API Integration

This application uses the [FakeStore API](https://fakestoreapi.com/) for product data:

- **GET /products** - Fetch all products
- **GET /products/categories** - Fetch all categories
- **GET /products/category/:category** - Fetch products by category

All API calls are managed through React Query for optimal caching and performance.

## 💾 State Management

### Redux Store
The application uses Redux Toolkit for global state management:
- **Cart State**: Manages shopping cart items, quantities, and totals
- **Session Persistence**: Cart state is saved to session storage

### React Query Cache
- **Product Data**: Cached for 5 minutes with stale-while-revalidate strategy
- **Category Data**: Cached to minimize API calls

## 🎨 Styling

- **CSS Modules**: Component-scoped styling
- **Responsive Design**: Mobile-first approach
- **Modern Layout**: Flexbox and CSS Grid
- **Custom Properties**: CSS variables for theming

## 🚧 Future Enhancements

- [ ] User authentication and profiles
- [ ] Product search functionality
- [ ] Product detail pages
- [ ] Wishlist feature
- [ ] Order history
- [ ] Payment integration
- [ ] Product reviews and ratings
- [ ] Sort and advanced filtering options
- [ ] Dark mode toggle
- [ ] Internationalization (i18n)

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use:
```bash
# Kill the process using the port (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or specify a different port
npm run dev -- --port 3000
```

### API Connection Issues
If you're experiencing API connection issues:
- Check your internet connection
- Verify that https://fakestoreapi.com is accessible
- Check browser console for CORS errors

### Build Errors
If you encounter build errors:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- [FakeStore API](https://fakestoreapi.com/) for providing the mock e-commerce data
- [React](https://react.dev/) team for the amazing framework
- [Redux Toolkit](https://redux-toolkit.js.org/) for simplified state management
- [Vite](https://vitejs.dev/) for the blazing-fast build tool

---

**Made with ❤️ using React, Redux, and Vite**
