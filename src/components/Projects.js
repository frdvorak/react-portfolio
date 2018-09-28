import React, { Component } from 'react';
import {Tabs, Tab} from 'react-mdl';

class Projects extends Component {
    state = { activeTab: 0 };
    toggleCategories(){
        if (this.state.activeTab === 0){
            return (
                <div><h1>This is React</h1></div>
            )
        } else if (this.state.activeTab === 1){
            return (
                <div><h1>This is Vanilla JavaScript</h1></div>
        )} else if (this.state.activeTab === 2){
            return (
                <div><h1>This is HTML/CSS</h1></div>
        )}  else if (this.state.activeTab === 3){
            return (
                <div><h1>This is Other</h1></div>
        )}


    }
    
    render() { 
        return ( 
            <div className='main-page category-tabs'>
                <h1>Projects</h1>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Vanilla JavaScript</Tab>
                    <Tab>HTML/CSS</Tab>
                    <Tab>Other</Tab>
                </Tabs>
                <section classname="projects-grid">
                    {this.toggleCategories()}
                </section>
            </div>
         );
    }
};
 
export default Projects;