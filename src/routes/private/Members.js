import React from 'react';
import CF from '../../CustomFunctions';
import $ from 'jquery';

export default class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'members': []
        };
        this.render();
    }

    componentDidMount() {
        $.ajax({
            url: CF.apiUrl + '/users',
            context: this,
        }).done(function (data) {
            this.setState({
                'members': CF.orderBy(data, "firstName")
            });
        });
    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {this.state.members.map(function (m) {
                    return (
                        <tr key={m.id}>
                            <td>{m.firstName}</td>
                            <td>{m.lastName}</td>
                            <td>{m.email}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
    }
}

