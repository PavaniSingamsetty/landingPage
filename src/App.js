import React from 'react';
import './App.css'; // Your CSS file
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;

