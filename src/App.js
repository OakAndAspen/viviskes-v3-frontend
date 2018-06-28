import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
//import './App.css';
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
        "title": "Accueil",
        "icon": "fas fa-search"
    },
    {
        "url": "/association",
        "title": "L'association",
        "icon": "fas fa-copy"
    },
    {
        "url": "/histoire-vivante",
        "title": "Histoire vivante",
        "icon": "fas fa-copy"
    },
    {
        "url": "/galerie",
        "title": "Galerie",
        "icon": "fas fa-copy"
    },
    {
        "url": "/contact",
        "title": "Contact",
        "icon": "fas fa-copy"
    }
];

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Nav entries={entries}/>
                    <section className="container">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/association" component={Association}/>
                            <Route path="/histoire-vivante" component={Blog}/>
                            <Route path="/galerie" component={Gallery}/>
                            <Route path="/contact" component={Contact}/>
                        </Switch>
                    </section>
                </div>
            </Router>
        );
    }
}

export default App;
