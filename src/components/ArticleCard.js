import React from "react";
import {Link} from 'react-router-dom';
import "./NavEntry.css";

export default class ArticleCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src="images/membres/artotragos.png"/>
                <div className="card-body">
                    <h4 className="card-title">
                        <span className="title mr-2">Mon article</span>
                        <small className="text-muted">
                            <span className="mr-2">05.03.2018</span>
                            <span className="badge badge-info mr-2">Musique</span>
                            <span className="badge badge-info mr-2">Habits</span>
                        </small>
                    </h4>
                    <p className="card-text">Some quick example text to build on the card title and make up
                        the bulk of the card's content.</p>
                    <Link to="#" className="btn btn-info">Lire la suite...</Link>
                </div>
            </div>
        );
    }
}
