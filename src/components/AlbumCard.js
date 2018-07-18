import React from "react";
import {Link} from 'react-router-dom';
import CF from "../CustomFunctions";
import moment from "moment/moment";

export default class AlbumCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={CF.imgFolder+"/membres/artotragos.png"} alt="Un évènement"/>
                <div className="card-body">
                    <h4 className="card-title">
                        <span className="title mr-2">{this.state.title}</span>
                        <small className="text-muted">
                            <span className="mr-2">{moment(this.state.startDate).format("DD.MM.YYYY")}</span>
                        </small>
                    </h4>
                    <p className="card-text">Some quick example text to build on the card title and make up
                        the bulk of the card's content.</p>
                    <Link to="#" className="btn btn-info">Voir les photos</Link>
                </div>
            </div>
        );
    }
}