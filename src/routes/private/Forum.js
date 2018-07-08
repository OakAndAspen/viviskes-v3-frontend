import React from 'react';
import CF from '../../CustomFunctions';
import '../../components/TButton.css';
import $ from 'jquery';

export default class Forum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'categories': [],
            'topics': []
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
        let id = $(e.target).attr('data-id');
        $('button').removeClass('active');
        $(e.target).addClass('active');

        if ($(e.target).attr('id') === "RecentTopics") {
            $('.list-group-item').each(function (i) {
                if (i<6) $(this).show();
                else $(this).hide();
            });
        } else {
            $('.list-group-item').each(function (i) {
                let cat = $(this).attr("category");
                if (id === cat) $(this).show();
                else $(this).hide();
            });
        }
    }

    render() {
        return (
            <div className="row pt-3">
                <div className="col-md-4">
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
                        {this.state.topics.map(function (t) {
                            return <li className="list-group-item" key={t.id} category={t.category}>{t.title}</li>;
                        }, this)}
                    </ul>
                </div>
            </div>
        );
    }
}

