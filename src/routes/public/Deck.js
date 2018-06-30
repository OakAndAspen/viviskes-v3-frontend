import React from 'react';

export default class Deck extends React.Component {
    render() {
        return <h1>Deck n° {this.props.match.params.id}</h1>;
    }
}

