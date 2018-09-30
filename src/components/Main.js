import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import LandingPage from './LandingPage';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

const Main = () => (
    <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Redirect exact from="https://frdvorak.github.io/react-portfolio/" to="/dashboard" />
        <Redirect exact from="https://frdvorak.github.io/react-portfolio" to="/dashboard" />
        <Route exact path="/dashboard" component={LandingPage} />
        <Route exact path="/react-portfolio/" component={LandingPage}/>
        <Route exact path="/react-portfolio/aboutme" component={Aboutme}/>
        <Route exact path="/react-portfolio/contact" component={Contact}/>
        <Route exact path="/react-portfolio/projects" component={Projects}/>
        <Route exact path="/react-portfolio/resume" component={Resume}/>
    </Switch>
);

export default Main;