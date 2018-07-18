import React from 'react';
import CF from "../../CustomFunctions";
import $ from "jquery";
import moment from "moment";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'partners': [],
            'upcomingEvents': [],
            'recentEvents': []
        };
        this.render();
    }

    componentDidMount() {
        $.ajax({
            url: CF.apiUrl + '/partners',
            context: this,
        }).done(function (data) {
            this.setState({
                'partners': CF.orderBy(data, "name")
            });
        });

        $.ajax({
            url: CF.apiUrl + '/events',
            context: this,
        }).done(function (data) {
            let events = CF.orderBy(data, "startDate", false);
            let upcomingEvents = [];
            let recentEvents = [];
            $.each(events, function (i, e) {
                let now = moment();
                let date = moment(e.startDate);
                if (date.isAfter(now) && e.public) upcomingEvents.push(e);
                if (date.isBefore(now) && e.public && recentEvents.length < 5) recentEvents.push(e);
            });

            this.setState({
                'upcomingEvents': upcomingEvents,
                'recentEvents': recentEvents
            });
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 my-3">
                    <img src={CF.imgFolder + "/divers/groupPhoto.png"} className="img-fluid" alt="Viviskes"/>
                </div>
                <div className="col-md-8">
                    <div className="border border-secondary rounded p-3 mb-3">
                        <h1>Présentation</h1>
                        <p>Si nous devions résumer en une seule question tout ce qui motive les quelques quarante
                            membres de
                            l’association Viviskes, cela serait : comment vivaient les Celtes ?</p>
                        <p>Cette question, l’association d’anthropologie guerrière Viviskes essaie d’y répondre en
                            adoptant
                            une approche pratique basée sur l’expérimentation, tout en profitant des lumières des
                            archéologues et artisans intégrés à l’association. Dans ce cadre, nous proposons de
                            nombreuses
                            animations d'histoire vivante.</p>
                    </div>

                    <div className="border border-secondary rounded p-3">
                        <h1>Agenda</h1>
                        <h2>Nos prochains évènements</h2>
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Quoi?</th>
                                <th>Quand?</th>
                                <th>Où?</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.upcomingEvents.map(function (e) {
                                return (
                                    <tr key={e.id}>
                                        <td>{e.title}</td>
                                        <td>{moment(e.startDate).format("DD.MM.YYYY")}</td>
                                        <td>{e.location}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                        <h2>Evènements récents</h2>
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Quoi?</th>
                                <th>Quand?</th>
                                <th>Où?</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.recentEvents.map(function (e) {
                                return (
                                    <tr key={e.id}>
                                        <td>{e.title}</td>
                                        <td>{moment(e.startDate).format("DD.MM.YYYY")}</td>
                                        <td>{e.location}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="border border-secondary rounded p-3">
                        <h2>Nos partenaires</h2>
                        <table className="table">
                            <tbody>
                            {this.state.partners.map(function (p) {
                                return (
                                    <tr key={p.id}>
                                        <td><span className="mr-3">{p.name}</span></td>
                                        <td>
                                            {p.link ? <a href={p.link} title={p.link}>
                                                <i className="fas fa-external-link-alt"></i>
                                            </a> : null}
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
    }
}

