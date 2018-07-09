import React from 'react';
import CF from '../../CustomFunctions';
import '../../components/TButton.css';
import $ from 'jquery';

export default class Forum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'categories': [],
            'topics': [],
            'currentSel': null,
            'currentTopic': null,
            'modalOpen': false
        };
        this.render();
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.showTopic = this.showTopic.bind(this);
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

    showTopic(e) {
        let id = $(e.target).attr("data-id");
        $.ajax({
            url: CF.apiUrl + '/topics/' + id,
            context: this,
        }).done(function (data) {
            this.setState({
                'topic': data
            });
            $('#TopicModal').modal();
        });
    }

    render() {
        let modal = null;
        if (this.state.topic) {
            modal = <div className="modal" id="TopicModal" tabIndex="-1" role="dialog" aria-labelledby="TopicModalTitle"
                         aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title"
                                        id="TopicModalTitle">{this.state.topic.title}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <h1>This is a test</h1>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
        }

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
                                    <li className="list-group-item d-flex" key={t.id} category={t.category}>
                                        <div className="col-2">
                                            <span className="badge badge-info mr-2">Non lu</span>
                                        </div>
                                        <div className="col-8">{t.title}</div>
                                        <div className="col-2">
                                            <button className="btn btn-info btn-sm" data-id={t.id}
                                                    onClick={this.showTopic}>
                                                Voir
                                            </button>
                                        </div>
                                    </li>);
                            } else return '';
                        }, this)}
                    </ul>
                </div>
                <div className="col-12">
                    {modal}
                </div>
            </div>
        );
    }
}

