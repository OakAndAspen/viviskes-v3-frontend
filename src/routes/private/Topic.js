import React from 'react';
import $ from "jquery";
import CF from "../../CustomFunctions";

export default class Topic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'messages': []
        };
        this.render();
        //this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    componentDidMount() {
        $.ajax({
            url: CF.apiUrl + '/messages/' + this.props.match.params.id,
            context: this,
        }).done(function (data) {
            this.setState({
                'messages': CF.orderBy(data, "title")
            });
        });
    }

    render() {
        return <h1>Topic n°{this.props.match.params.id}</h1>;
    }
}

