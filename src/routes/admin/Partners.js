import React from 'react';
import CF from '../../CustomFunctions';
import $ from 'jquery';
//import {Link} from 'react-router-dom';

export default class Partners extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'partners': []
        };
        this.render();
    }

    componentDidMount() {
        $.ajax({
            url: CF.apiUrl + '/partners',
            context: this,
        }).done(function (data) {
            this.setState({
                'partners': CF.orderBy(data, "name")
            });
        });
    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Lien</th>
                </tr>
                </thead>
                <tbody>
                {this.state.partners.map(function (m) {
                    return (
                        <tr key={m.id}>
                            <td>{m.name}</td>
                            <td><a href={m.link}>{m.link}</a></td>
                            <td><i className="fas fa-pencil-alt"></i></td>
                            <td><i className="fas fa-trash-alt"></i></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
    }
}

