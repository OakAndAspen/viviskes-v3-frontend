import React from 'react';
import AlbumCard from "../components/AlbumCard";
import Carousel from "../components/Carousel";

export default class Gallery extends React.Component {
    render() {
        return (
            <div className="row pt-3">
                <div className="col-12"><p>/api/events</p></div>
                <div className="col-12 pb-3">
                    <Carousel/>
                </div>

                <div className="col-md-6 col-lg-4 pb-2">
                    <AlbumCard/>
                </div>
                <div className="col-md-6 col-lg-4 pb-2">
                    <AlbumCard/>
                </div>
                <div className="col-md-6 col-lg-4 pb-2">
                    <AlbumCard/>
                </div>
                <div className="col-md-6 col-lg-4 pb-2">
                    <AlbumCard/>
                </div>
                <div className="col-md-6 col-lg-4 pb-2">
                    <AlbumCard/>
                </div>
            </div>
        );
    }
}

