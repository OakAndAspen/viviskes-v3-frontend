import React from "react";
import {Link} from 'react-router-dom';
import CF from "../CustomFunctions";
import moment from "moment";

export default class ArticleCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={CF.imgFolder+"/membres/artotragos.png"} alt="Artotragos"/>
                <div className="card-body">
                    <h4 className="card-title">
                        <small className="text-muted">
                            <span className="badge badge-info mr-2">Musique</span>
                            <span className="badge badge-info mr-2">Habits</span>
                        </small>
                        <hr/>
                        <span className="title mr-2">{this.state.title}</span>
                        <small className="text-muted">{moment(this.state.creationDate).format("DD.MM.YYYY")}</small>
                    </h4>
                    <p className="card-text">Some quick example text to build on the card title and make up
                        the bulk of the card's content.</p>
                    <Link to="#" className="btn btn-info">Lire la suite...</Link>
                </div>
            </div>
        );
    }
}
