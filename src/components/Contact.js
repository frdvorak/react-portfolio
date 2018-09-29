import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='main-page contact-body'>
                <h1>Contact page</h1>
                <Grid className='contact-grid'>
                    <Cell col={6}>half page</Cell>
                    <Cell col={6}>half page</Cell>
                </Grid>
            </div>
         );
    }
};
 
export default Contact;