import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Featured from './components/featured/Featured';
import Register from './components/register/Register';
import Footer from './components/footer/Footer';

const App = () => (
  <>
    <Navbar />
    <Hero />
    <Featured />
    <Register />
    <Footer />
  </>
);

export default App;
