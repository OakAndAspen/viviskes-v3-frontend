import React from 'react';
import "./Blog.css";
import ArticleCard from "../components/ArticleCard";

export default class Blog extends React.Component {
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
                    <p>/api/articles</p>
                    <div className="row">
                        <div className="col-md-6 pb-2">
                            <ArticleCard/>
                        </div>
                        <div className="col-md-6">
                            <ArticleCard/>
                        </div>
                        <div className="col-md-6">
                            <ArticleCard/>
                        </div>
                        <div className="col-md-6">
                            <ArticleCard/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

