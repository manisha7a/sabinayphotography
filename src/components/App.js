import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import history from '../history';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Function from './services/Function';
import MaternityShoot from './services/MaternityShoot';
import StudioShoot from './services/StudioShoot';
import NavBar from './NavBar';
import Footer from './Footer';
import Dashboard from './tshirtApp/Dashboard';
import Projects from './tshirtApp/Projects';
import Account from './Account';

const App = () => {
    return(
        <div>
            <Router history={history}>
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/services/function" component={Function}/>
                        <Route exact path="/services/maternityshoot" component={MaternityShoot}/>
                        <Route exact path="/services/studioshoot" component={StudioShoot}/>
                        <Route exact path="/tshirt/dashboard" component={Dashboard}/>
                        <Route exact path="/tshirt/projects" component={Projects}/>
                        <Route exact path="/account" component={Account}/>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </div>
           
    );
};

export default App;