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
            <nav id="Nav" className="navbar navbar-expand-md navbar-light text-center w-100">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav d-flex justify-content-center w-100">
                        {this.state.entries.map(function(t) {
                            return <NavEntry key={t.url} title={t.title} icon={t.icon} url={t.url}/>;
                        })}

                    </div>
                </div>
            </nav>
        );
    }

    onNavButtonClick() {
        this.setState({open: !this.state.open});
    }
}
