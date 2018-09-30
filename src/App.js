import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Drawer, Content, Navigation } from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';



class App extends Component {
  render() {
    return (
    <div className="demo-big-content">
      <Layout>
          <Header className='header-color' title="Portfolio" scroll>
              <Navigation>
                    <Link to="/react-portfolio/">Home</Link>
                    <Link to="/react-portfolio/projects">Projects</Link>
                    <Link to="/react-portfolio/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Portfolio">
              <Navigation>
                    <Link to="/react-portfolio/">Home</Link>
                    <Link to="/react-portfolio/projects">Projects</Link>
                    <Link to="/react-portfolio/contact">Contact</Link>
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
