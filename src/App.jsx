import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './components/TopProducts/TopProducts';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-sine',
      delay: 100,
    });
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
    </div>
  )
}

export default App
