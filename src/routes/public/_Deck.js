import React from 'react';

export default class _Deck extends React.Component {
    render() {
        return <h1>Deck n° {this.props.match.params.id}</h1>;
    }
}

