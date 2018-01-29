import React, { Component } from 'react';
import logo from './logo.svg';
import './css/invie.css';
import Portada from './components/Portada.jsx'
import Guitarras from './components/Guitarras.jsx'
import Footer from './components/Footer.jsx'

class App extends Component {
  render() {
    return (
      <section className="Invie">
        <Portada/>
        {/* Portada */}
        <Guitarras/>
        {/* Guitarras */}
        <Footer/>
        {/* Footer */}
      </section>
    );
  }
}

export default App;
