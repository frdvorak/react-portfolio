import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Drawer, Content, Navigation } from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faPen } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faPen);



class App extends Component {
  render() {
    return (
    <div className="demo-big-content">
      <Layout>
          <Header className='header-color' title="Portfolio" scroll>
              <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Portfolio">
              <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" >
                <Main/>
              </div>
          </Content>
      </Layout>
    </div>
    );
  }
}

export default App;
