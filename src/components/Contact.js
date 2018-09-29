import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Face from '../images/face.png';
import {List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='main-page contact-body'>
                <h1>Contact page</h1>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Frank Dvorak</h2>
                        <img className='img' alt='img' src={Face} style={{height: '250px'}}/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em', textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Maecenas sollicitudin. Phasellus enim erat, vestibulum vel.</p>
                    </Cell>

                    <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <List className='contact-list'>
                        <ListItem>
                            <ListItemContent icon="phone" style={{fontSize: '25px', fontFamily: 'Anton', color: 'white'}}>
                            123 456 789</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon="email" style={{fontSize: '25px', fontFamily: 'Anton', color: 'white'}}>
                            email@gmail.com</ListItemContent>
                        </ListItem>
                    </List>
                    </Cell>
                </Grid>
            </div>
         );
    }
};
 
export default Contact;