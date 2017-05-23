import React from 'react';
import ReactDom from 'react-dom';
import Jugadores from './components/Jugadores';

let jugadores = [
    { id: 1, nickname: 'Mario', puntos: 7200, copa: 'oro', color: 'yellow' },
    { id: 2, nickname: 'Lucas', puntos: 6800, copa: 'plata', color: 'red' },
    { id: 3, nickname: 'María', puntos: 6750, copa: 'plata', color: 'blue' },
    { id: 4, nickname: 'Sonia', puntos: 5000, copa: 'bronce', color: 'green' }
];

ReactDom.render(<Jugadores jugadores={jugadores} />, document.getElementById('root'));
