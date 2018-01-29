import React, { Component } from 'react';
import logo from './logo.svg';
import './css/invie.css';
import Portada from './components/Portada.jsx'
import Guitarras from './components/Guitarras.jsx'
import Footer from './components/Footer.jsx'

/*const data = {
  menu : [
    {
        href: 'index.html',
        title: 'Home'
    },
    {
        href: '#guitarras',
        title: 'Guitarras'
    },
    {
        href: 'precios.html',
        title: 'Precios'
    },
    {
        href: 'hola.html',
        title: "Don't click me"
    }
  ],

  logoPortada : logoPortada,

  guitarras : [
    {
        image: acustica,
        alt: 'Guitarra Invie Acustica',
        name: 'Invie Acustica',
        features: [
            'Estilo vintage',
            'Madera pura',
            'Incluye estuche invisible de aluminio'
        ]
    },
    {
      image: classic,
      alt: 'Guitarra Invie Clasica',
      name: 'Invie Clasica',
      features: [
          'Estilo vintage',
          'Liviana',
          'Empieza tu camino como rockstar'
      ]
  }
]
}*/

class App extends Component {
  render() {
    return (
      <section className="Invie">
        {/*<Portada menu={data.menu} logo={data.logoPortada}/>*/}
        <Portada/>
        {/* Portada */}
        {/*<Guitarras guitarras={data.guitarras}/>*/}
        <Guitarras/>
        {/* Guitarras */}
        <Footer/>
        {/* Footer */}
      </section>
    );
  }
}

export default App;
