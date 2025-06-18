import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Artists from './components/Artists';
import Workshops from './components/Workshops';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Artists />
        <Workshops />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App; 