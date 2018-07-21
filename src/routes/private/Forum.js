import React from 'react';
import CF from '../../CustomFunctions';
import '../../components/TButton.css';
import $ from 'jquery';
import {Link} from 'react-router-dom';

export default class Forum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'categories': [],
            'topics': [],
            'currentSel': null
        };
        this.render();
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    componentDidMount() {
        $.ajax({
            url: CF.apiUrl + '/categories',
            context: this,
        }).done(function (data) {
            this.setState({
                'categories': CF.orderBy(data, "title")
            });
        });

        $.ajax({
            url: CF.apiUrl + '/topics',
            context: this,
        }).done(function (data) {
            this.setState({
                'topics': CF.orderBy(data, "creationDate", false)
            });
            $('#RecentTopics').trigger('click');
        });
    }

    handleCategoryChange(e) {
        $('#Categories button').removeClass('active');
        $(e.target).addClass('active');
        $(e.target).blur();

        if ($(e.target).attr('id') === "RecentTopics") {
            this.setState({currentSel: null});
        } else {
            this.setState({currentSel: $(e.target).attr('data-id')});
        }
    }

    render() {
        return (
            <div className="row pt-3">
                <div className="col-md-4" id="Categories">
                    <button id="RecentTopics" className="btn TButton active w-100 my-1"
                            onClick={this.handleCategoryChange}>Sujets récents
                    </button>
                    <hr/>
                    {this.state.categories.map(function (m) {
                        return <button className="btn TButton w-100 my-1" key={m.id} data-id={m.id}
                                       onClick={this.handleCategoryChange}>{m.title}</button>;
                    }, this)}
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {this.state.topics.map(function (t, i) {
                            if ((this.state.currentSel == null && i < 6) || (parseInt(this.state.currentSel, 10) === parseInt(t.category, 10))) {
                                return (
                                    <Link to={'/intranet/forum/'+t.id} className="list-group-item d-flex" key={t.id} category={t.category}>
                                        <div className="col-2">
                                            <span className="badge badge-info mr-2">Non lu</span>
                                        </div>
                                        <div className="col-8">{t.title}</div>
                                    </Link>);
                            } else return '';
                        }, this)}
                    </ul>
                </div>
            </div>
        );
    }
}

