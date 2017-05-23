import React from 'react';
import Copa from './Copa';

export default class Jugador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            estado: 'En línea',
            puntos: props.datos.puntos,
            style: {
                background: props.datos.color
            }
        }
    }

    cambiaEstado() {
        let newState = this.state;

        if (this.state.estado == 'En línea') {
            newState.estado = 'Fuera de línea';
        } else {
            newState.estado = 'En línea';
        }

        this.setState(newState);
    }

    sumarPuntos() {
        let newState = this.state;

        newState.puntos++;
        this.setState(newState);
    }

    restarPuntos() {
        let newState = this.state;

        newState.puntos--;
        this.setState(newState);
    }

    render() {
        return (
            <li style={this.state.style}>
                <Copa tipo={this.props.datos.copa} />
                <span>{this.state.estado}</span>
                <button onClick={this.cambiaEstado.bind(this)}>Cambiar</button><br/>
                <span>Nombre: {this.props.datos.nickname}</span><br/>
                <span>Puntos: {this.state.puntos}</span>
                <button onClick={this.sumarPuntos.bind(this)}>+</button>
                <button onClick={this.restarPuntos.bind(this)}>-</button>
            </li>
        );
    }
}
