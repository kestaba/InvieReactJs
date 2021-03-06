import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Invie from './Invie';
import cheet from 'cheet.js'

import logoPortada from './images/invie.png'
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';
import easteA from './images/easter-a.png';
import easteB from './images/easter-b.png';

import { Provider } from 'react-redux'
import { createStore } from 'redux';

const initialState = {
    isAnimated:false,

    menu : [
      {
          href: 'index.html',
          title: 'Home'
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
}

function reducer(state, action){
    switch(action.type){
        case 'UPDATE_PROPS':{
            const newProps = action.payload.props;
            return {...state, ...newProps}
        }
        default:
            return state
    }
}

const store = createStore(reducer, initialState);

const easter = {
    isAnimated: 'is-animated',

    menu: [
        {
            href: 'index.html',
            title: 'Home'
        }
    ],
    guitarras : [
        {
            image: easteA,
            alt: 'Guitarra Invie Padre de familia',
            name: 'Invie Padre de familia',
            features: [
                'Lista para copiar a los Simpsons',
                'Aire puro',
                'Chistes malos'
            ]
        },
        {
          image: easteB,
          alt: 'Guitarra Invie Anime',
          name: 'Invie Anime',
          features: [
              'Estilo vintage',
              'Liviana',
              'Empieza tu camino como rockstar'
          ]
      }
    ]  
}

cheet('i n v i e', ()=>{
    store.dispatch({
       type: 'UPDATE_PROPS',
       payload: {
        props: easter
       }
    })
  console.log('lo lograste, descubriste el easter egg');
})

cheet('g o b a c k', ()=>{
  console.log('regresaste al estado inicial');
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
     props: initialState
    }
 })
})

ReactDOM.render(
    <Provider store={store}>
        <Invie/>
    </Provider>, document.getElementById('root')
);
