import React from "react";
import {Link} from 'react-router-dom';
import "./Nav.css";

export default class Nav extends React.Component {

    constructor(props) {
        super(props);

        let publicEntries = [
            {
                "url": "/",
                "title": "Accueil"
            },
            {
                "url": "/association",
                "title": "L'association"
            },
            {
                "url": "/histoire-vivante",
                "title": "Histoire vivante"
            },
            {
                "url": "/galerie",
                "title": "Galerie"
            },
            {
                "url": "/contact",
                "title": "Contact"
            }
        ];
        let privateEntries = [
            {
                "url": "/intranet/membres",
                "title": "Membres",
                "icon": "fas fa-users"
            },
            {
                "url": "/intranet/calendrier",
                "title": "Calendrier",
                "icon": "far fa-calendar-alt"
            },
            {
                "url": "/intranet/forum",
                "title": "Forum",
                "icon": "fas fa-comments"
            },
            {
                "url": "/intranet/profil",
                "title": "Profil",
                "icon": "fas fa-user"
            }
        ];
        let adminEntries = [
            {
                "url": "/intranet/articles",
                "title": "Articles",
                "icon": "fas fa-font"
            },
            {
                "url": "/intranet/partenaires",
                "title": "Partenaires",
                "icon": "far fa-handshake"
            }
        ];

        let entries;
        if (props.scope === 'public') {
            entries = publicEntries;
        } else if (props.scope === 'private') {
            if (props.admin) {
                entries = adminEntries.concat(privateEntries);
            } else {
                entries = privateEntries;
            }
        }

        this.state = {
            entries: entries,
            scope: props.scope
        };
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
                        {this.state.entries.map(function (t) {
                            return (
                                <li className="nav-item NavEntry">
                                    <Link to={t.url} className="nav-link">
                                        {this.state.scope === 'private' ? <i className={t.icon} title={t.title}></i> : <span>{t.title}</span>}
                                    </Link>
                                </li>);
                        }
                        , this)}
                    </div>
                </div>
            </nav>
        );
    }
}
