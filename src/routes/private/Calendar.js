import React from 'react';
import CF from '../../CustomFunctions';
import $ from 'jquery';
import './Calendar.css';
import '../../components/TButton.css';
import moment from 'moment';
//import {Link} from 'react-router-dom';

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'events': [],
            'currentEvent': null
        };
        this.render();
        this.handleEventChange = this.handleEventChange.bind(this);
    }

    componentDidMount() {
        $.ajax({
            url: CF.apiUrl + '/events',
            context: this,
        }).done(function (data) {
            this.setState({
                'events': CF.orderBy(data, "startDate", false)
            });
            $('#Events li:first-child').trigger('click');
        });
    }

    handleEventChange(e) {
        $('#Events li').removeClass('current');
        $(e.target).addClass('current');
        $(e.target).blur();

        let eventId = $(e.target).attr('data-id');

        $.ajax({
            url: CF.apiUrl + '/events/' + eventId,
            context: this,
        }).done(function (data) {
            this.setState({
                'currentEvent': data
            });
        });
    }

    render() {
        let event = null;
        if (this.state.currentEvent) {
            let e = this.state.currentEvent;
            event =
                <div>
                    <div className="row">
                        <div className="col-12">
                            <h1>
                                {e.title}<br/>
                                <small className="text-muted">
                                    {moment(e.startDate).format("DD.MM.YYYY")}
                                    {e.endDate ? ' - ' + moment(e.endDate).format("DD.MM.YYYY") : null}
                                </small>
                            </h1>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-md-4">
                            <button className="btn TButton w-100">J'organise</button>
                        </div>
                        <div className="col-md-4">
                            <button className="btn TButton w-100">Je participe</button>
                        </div>
                        <div className="col-md-4">
                            <button className="btn TButton w-100">Je ne participe pas</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>{e.description}</p>
                        </div>
                    </div>
                </div>
        }

        return (
            <div className="row pt-3">
                <div className="col-md-4" id="Events">
                    <ul className="list-group list-group-flush">
                        {this.state.events.map(function (e) {
                            return <li className="list-group-item" key={e.id} data-id={e.id}
                                       onClick={this.handleEventChange}>
                                {e.title}
                            </li>
                        }, this)}
                    </ul>
                </div>
                <div className="col-md-8">
                    {event ? event : null}
                </div>
            </div>
        );
    }
}

