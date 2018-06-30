import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.css';
import Nav from "./components/Nav";

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
    loader: () => import('./routes/Home'),
    loading: Loading,
});
const Association = Loadable({
    loader: () => import('./routes/Association'),
    loading: Loading,
});
const Blog = Loadable({
    loader: () => import('./routes/Blog'),
    loading: Loading,
});
const Gallery = Loadable({
    loader: () => import('./routes/Gallery'),
    loading: Loading,
});
const Contact = Loadable({
    loader: () => import('./routes/Contact'),
    loading: Loading,
});

let entries = [
    {
        "url": "/",
        "title": "Accueil"
    },
    {
        "url": "/association",
        "title": "L'association"
    },
    {
        "url": "/histoire-vivante",
        "title": "Histoire vivante"
    },
    {
        "url": "/galerie",
        "title": "Galerie"
    },
    {
        "url": "/contact",
        "title": "Contact"
    }
];

class App extends Component {
    render() {
        return (
            <Router>
                <div id="App">
                    <header className="text-center p-3">
                        <img src="images/banner.svg"/>
                    </header>
                    <Nav entries={entries}/>
                    <section className="pb-3">
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/association" component={Association}/>
                                <Route path="/histoire-vivante" component={Blog}/>
                                <Route path="/galerie" component={Gallery}/>
                                <Route path="/contact" component={Contact}/>
                            </Switch>
                        </div>
                    </section>
                    <footer className="text-center">
                        <div id="footerImage">
                            <img src="images/footer.png" height="200"/>
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
                                            <a href="/intranet">Intranet</a><br/>
                                        </p>
                                    </div>
                                </div>
                                <div className="row text-center">
                                    <div className="col-12">
                                        <hr/>
                                        <p>Copyright OakAndAspen 2018 | irinadespot@gmail.com</p>
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
