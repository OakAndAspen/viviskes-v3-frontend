import React from 'react';
import CF from '../../CustomFunctions';
import $ from 'jquery';
import {Link} from 'react-router-dom';

export default class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'articles': []
        };
        this.render();
    }

    componentDidMount() {
        $.ajax({
            url: CF.apiUrl + '/articles',
            context: this,
        }).done(function (data) {
            this.setState({
                'articles': CF.orderBy(data, "creationDate", false)
            });
        });
    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {this.state.articles.map(function (m) {
                    return (
                        <tr key={m.id}>
                            <td>{m.title}</td>
                            <td>{m.creationDate}</td>
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

