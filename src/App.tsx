// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Hero from './components/Hero.tsx';
import Navbar from './components/Navbar.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
      </div>
    </>
  );
}

export default App;
