import React from 'react';
import './style/index.scss';
import Home from './pages/Home.jsx';
import ScrollToTop from './components/ScrollToTop';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Promo from './components/Promo';
import Recommend from './components/Recommend';
import Services from './components/Services';
import Choose from './components/Choose';

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <Home />
      <Services />
      <Categories />
      <Recommend />
      <Choose />
      <Products />
      <Promo />
      <Footer />
    </div>
  );
}
