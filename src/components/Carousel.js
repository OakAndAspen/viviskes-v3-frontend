import React from "react";
import "./Carousel.css";
import CF from "../CustomFunctions";

export default class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <div id="Carousel" className="carousel slide bg-dark" data-ride="carousel" data-interval="false">
                <div className="carousel-inner">
                    <div className="carousel-item text-center active">
                        <img src={CF.imgFolder+"/membres/artotragos.png"} alt="First slide"/>
                    </div>
                    <div className="carousel-item text-center">
                        <img src={CF.imgFolder+"/membres/darbo.png"} alt="Second slide"/>
                    </div>
                    <div className="carousel-item text-center">
                        <img src={CF.imgFolder+"/membres/kurmida.png"} alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#Carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#Carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}
