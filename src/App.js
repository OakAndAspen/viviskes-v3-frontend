import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import Loadable from 'react-loadable';
import CF from './CustomFunctions';
import './App.css';
import Nav from "./components/Nav";

const Loading = () => <div>Loading...</div>;

let NavBar = Loadable({
    loader: () => import('./components/Nav'),
    loading: Loading,
});

let publicPages = {
    Home: Loadable({
        loader: () => import('./routes/public/Home'),
        loading: Loading,
    }),
    Association: Loadable({
        loader: () => import('./routes/public/Association'),
        loading: Loading,
    }),
    Blog: Loadable({
        loader: () => import('./routes/public/Blog'),
        loading: Loading,
    }),
    Gallery: Loadable({
        loader: () => import('./routes/public/Gallery'),
        loading: Loading,
    }),
    Contact: Loadable({
        loader: () => import('./routes/public/Contact'),
        loading: Loading,
    })
};

let privatePages = {
    Members: Loadable({
        loader: () => import('./routes/private/Members'),
        loading: Loading,
    }),
    Calendar: Loadable({
        loader: () => import('./routes/private/Calendar'),
        loading: Loading,
    }),
    Forum: Loadable({
        loader: () => import('./routes/private/Forum'),
        loading: Loading,
    }),
    Profile: Loadable({
        loader: () => import('./routes/private/Profile'),
        loading: Loading,
    }),
};

let adminPages = {
    Partners: Loadable({
        loader: () => import('./routes/admin/Partners'),
        loading: Loading,
    }),
    Articles: Loadable({
        loader: () => import('./routes/admin/Articles'),
        loading: Loading,
    })
};

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scope: 'private',
            loggedIn: false,
            admin: true
        };
    }

    render() {
        return (
            <Router>
                <div id="App">
                    <header className="text-center p-3">
                        <img src={CF.imgFolder + "/banner.svg"} alt="Bannière"/>
                    </header>
                    {/* --- Nav bar --- */}
                    <Switch>
                        <Route path="/intranet" component={() => <Nav scope="private" admin={this.state.admin} />} />
                        <Route path="/" component={() => <Nav scope="public" admin={this.state.admin} />} />
                    </Switch>

                    {/* --- Content --- */}
                    <section className="pb-3">
                        <div className="container">
                            <Switch>
                                {/* ---------- Public pages ----------*/}
                                <Route exact path="/" component={publicPages.Home}/>
                                <Route exact path="/association" component={publicPages.Association}/>
                                <Route exact path="/histoire-vivante" component={publicPages.Blog}/>
                                <Route exact path="/galerie" component={publicPages.Gallery}/>
                                <Route exact path="/contact" component={publicPages.Contact}/>

                                {/* ---------- Private pages ----------*/}
                                <Route exact path="/intranet" render={() => (
                                    <Redirect to="/intranet/forum"/>
                                )}/>
                                <Route exact path="/intranet/membres" component={privatePages.Members}/>
                                <Route exact path="/intranet/calendrier" component={privatePages.Calendar}/>
                                <Route exact path="/intranet/forum" component={privatePages.Forum}/>
                                <Route exact path="/intranet/profil" component={privatePages.Profile}/>

                                {/* ---------- Admin pages ----------*/}
                                <Route exact path="/intranet/partenaires" component={adminPages.Partners}/>
                                <Route exact path="/intranet/articles" component={adminPages.Articles}/>
                            </Switch>
                        </div>
                    </section>
                    <footer className="text-center">
                        <div id="footerImage">
                            <img src={CF.imgFolder + "/footer.png"} height="200" alt="Footer"/>
                        </div>
                        <div id="footerContent">
                            <div className="container">
                                <div className="row text-left">
                                    <div className="col-md-6">
                                        <h4>Contactez-nous!</h4>
                                        <p>
                                            viviskes@gmail.com<br/>
                                            CCP: 12-812812-7<br/>
                                            IBAN: CH43 0900 0000 1281 2812 7
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Liens utiles</h4>
                                        <p>
                                            <Link to="/">Site public</Link><br/>
                                            <Link to="/intranet">Intranet</Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="row text-center">
                                    <div className="col-12">
                                        <hr/>
                                        <p>Copyright © {(new Date()).getFullYear()} Irina Despot <br/>
                                            Design par Jonathan Schaffner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </Router>
        );
    }
}

export default App;
