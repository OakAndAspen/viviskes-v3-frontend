import React from "react";
import NavEntry from "./NavEntry";
import "./Nav.css";

export default class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            entries: props.entries,
            open: false
        };
        this.onNavButtonClick = this.onNavButtonClick.bind(this);
    }

    render() {
        return (
            <nav id="Nav" className={this.state.open ? 'open':'closed'}>
                <p className="m-3" id="NavButton" onClick={this.onNavButtonClick}>
                    <i className="fas fa-bars"></i>
                </p>
                <form className="m-3" id="NavSearch">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                </form>
                <ul className="nav flex-column">
                    {this.state.entries.map(function(t) {
                        return <NavEntry key={t.url} title={t.title} icon={t.icon} url={t.url}/>;
                    })}
                </ul>
            </nav>
        );
    }

    onNavButtonClick() {
        this.setState({open: !this.state.open});
    }
}
