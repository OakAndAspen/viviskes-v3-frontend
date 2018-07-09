import React from 'react';
import "./Blog.css";
import ArticleCard from "../../components/ArticleCard";
import CF from "../../CustomFunctions";
import $ from "jquery";

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'articles': []
        };
        this.render();
    }

    componentDidMount() {
        $.ajax({
            url: CF.apiUrl + '/articles',
            context: this,
        }).done(function (data) {
            this.setState({
                'articles': CF.orderBy(data, "creationDate", false)
            });
        });
    }

    render() {
        return (
            <div className="row pt-4">
                <div className="col-lg-3" id="BlogTags">
                    <p>/api/tags</p>

                    {/* Active tags */}
                    <span className="badge badge-secondary mr-2">Archéologie <i className="fas fa-times"></i></span>
                    <span className="badge badge-secondary mr-2">Cuisine <i className="fas fa-times"></i></span>

                    <hr/>

                    {/* All tags */}
                    <span className="badge badge-info mr-2">Archéologie</span>
                    <span className="badge badge-info mr-2">Cuisine</span>
                    <span className="badge badge-info mr-2">Habits</span>
                    <span className="badge badge-info mr-2">Musique</span>
                    <span className="badge badge-info mr-2">Habits</span>
                    <span className="badge badge-info mr-2">Musique</span>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        {this.state.articles.map(function (a) {
                            return (
                                <div className="col-md-6 pb-2">
                                    <ArticleCard title={a.title} creationDate={a.creationDate}/>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

