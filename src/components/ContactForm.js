import React from "react";

export default class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <form id="ContactForm">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">Prénom</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Prénom"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Nom</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Nom"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Adresse email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Message</label>
                    <textarea id="content" className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-info w-100">Envoyer</button>
            </form>
        );
    }
}
