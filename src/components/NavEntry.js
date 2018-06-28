import React from "react";
import {Link} from 'react-router-dom';
import "./NavEntry.css";

export default class NavEntry extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <li className="nav-item NavEntry">
                <Link to={this.state.url} className="nav-link">
                    {this.state.icon ? <i className={this.state.icon}></i>: ''}
                    <span>{this.state.title}</span>
                </Link>
            </li>
        );
    }
}
