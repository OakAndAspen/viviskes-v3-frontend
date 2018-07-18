import React from 'react';
import CF from "../../CustomFunctions";

export default class Profile extends React.Component {
    render() {
        return (
            <div className="row pt-3">
                <div className="col-md-8">
                    {/* Infos de base */}
                    <form>
                        <h2>Infos de base</h2>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label>Prénom</label>
                                <input type="text" className="form-control" placeholder="Prénom"/>
                            </div>
                            <div className="form-group col-6">
                                <label>Nom</label>
                                <input type="text" className="form-control" placeholder="Nom"/>
                            </div>
                            <div className="form-group col-6">
                                <label>Nom celte</label>
                                <input type="text" className="form-control" placeholder='"Astérix" ça compte pas'/>
                            </div>
                            <div className="form-group col-6">
                                <label>N° de portable</label>
                                <input type="text" className="form-control" placeholder="07x xxx xx xx"/>
                            </div>
                            <div className="form-group col-12">
                                <label>Adresse email</label>
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-12">
                                <label>Adresse</label>
                                <input type="text" className="form-control" placeholder="Adresse"/>
                            </div>
                            <div className="form-group col-4">
                                <input type="text" className="form-control" placeholder="NPA"/>
                            </div>
                            <div className="form-group col-8">
                                <input type="text" className="form-control" placeholder="Localité"/>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary w-100">Enregistrer</button>
                    </form>
                </div>
                <div className="col-md-4">
                    {/* Image de profil */}
                    <h2>Photo de profil</h2>
                    <img src={CF.imgFolder+"/membres/artotragos.png"} className="img-fluid mb-3"/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFile" lang="fr"/>
                        <label className="custom-file-label" htmlFor="customFile">Choisir une nouvelle photo</label>
                    </div>
                    <hr/>

                    {/* Change password */}
                    <form>
                        <h2>Mot de passe</h2>
                        <div className="form-group">
                            <input type="text" className="form-control mb-2" placeholder="Ancien mot de passe"/>
                            <input type="text" className="form-control mb-2" placeholder="Nouveau mot de passe"/>
                            <input type="text" className="form-control mb-2" placeholder="Répéter le mot de passe"/>
                        </div>
                        <button type="button" className="btn btn-primary w-100">Changer le mot de passe</button>
                    </form>
                </div>
            </div>
        );
    }
}

