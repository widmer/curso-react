import React from 'react';

export default class Copa extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <figure>
                <img src={`http://www.secsanluis.com.ar/tallerReact/${this.props.tipo}.png`} />
            </figure>
        );
    }
}
