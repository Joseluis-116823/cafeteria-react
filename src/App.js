// App.js
// Componente principal que integra Header, Menu y Footer

import React from 'react';
import './styles/main.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;