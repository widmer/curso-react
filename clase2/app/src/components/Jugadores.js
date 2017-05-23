import React from 'react';
import Jugador from './Jugador';

const style = {
    listStyleType: 'none',
    margin: 0,
    padding: 0
};

export default class Jugadores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jugadores: props.jugadores,
            formulario: {
                nickname: '',
                puntos: '',
                copa: '',
                color: ''
            },
            id: 4
        }
    }

    agregarJugadorFormulario(e) {
        let newState = this.state;

        newState.id++;
        newState.jugadores.push({
            id: newState.id,
            nickname: newState.formulario.nickname,
            puntos: newState.formulario.puntos,
            copa: newState.formulario.copa,
            color: newState.formulario.color
        });
        this.setState(newState);
        e.preventDefault();
    }

    changeNickname(e) {
        let newState = this.state;
        newState.formulario.nickname = e.target.value;
        this.setState(newState);
    }

    changePuntos(e) {
        let newState = this.state;
        newState.formulario.puntos = e.target.value;
        this.setState(newState);
    }

    changeCopa(e) {
        let newState = this.state;
        newState.formulario.copa = e.target.value;
        this.setState(newState);
    }

    changeColor(e) {
        let newState = this.state;
        newState.formulario.color = e.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.agregarJugadorFormulario.bind(this)}>
                    <input type="text" value={this.state.formulario.nickname} onChange={this.changeNickname.bind(this)} placeholder="nickname" />
                    <input type="text" value={this.state.formulario.puntos} onChange={this.changePuntos.bind(this)} placeholder="puntos" />
                    <input type="text" value={this.state.formulario.copa} onChange={this.changeCopa.bind(this)} placeholder="copa" />
                    <input type="text" value={this.state.formulario.color} onChange={this.changeColor.bind(this)} placeholder="color" />
                    <input type="submit" value="Agregar" />
                </form>

                <ul style={style}>
                    {this.state.jugadores.map((jugador) => {
                        return <Jugador key={jugador.id} datos={jugador}/>
                    })}
                </ul>
            </div>
        );
    }
}
