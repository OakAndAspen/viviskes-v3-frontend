import React from 'react';
import AlbumCard from "../../components/AlbumCard";
import Carousel from "../../components/Carousel";
import CF from "../../CustomFunctions";
import $ from "jquery";
import moment from "moment";

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'events': []
        };
        this.render();
    }

    componentDidMount() {
        $.ajax({
            url: CF.apiUrl + '/events',
            context: this,
        }).done(function (data) {
            let events = [];
            for(var e in data) {
                if(moment(e.startDate).isBefore(moment())) {
                    events.push(e);
                }
            }
            this.setState({
                'events': CF.orderBy(data, "startDate", false)
            });
        });
    }

    render() {
        return (
            <div className="row pt-3">
                <div className="col-12 pb-3">
                    <Carousel/>
                </div>

                {this.state.events.map(function (e) {
                    return (
                        <div className="col-md-6 pb-2">
                            <AlbumCard title={e.title} creationDate={e.startDate}/>
                        </div>
                    );
                })}
            </div>
        );
    }
}