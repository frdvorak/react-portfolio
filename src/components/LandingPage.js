import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Avatar from '../images/avatar.png';


class LandingPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{width: '100', margin: 'auto'}}>
                <Grid className='main-page landing-grid'>
                    <Cell col='12'>
                        <img className='avatar-img' alt='avatar' src={Avatar}/>
                        <div className='banner-text'>
                            <h1>Front-end Web Developer</h1>
                            <hr />
                            
                            <p>HTML | CSS | JavaScript | React | Node.js | Express | MongoDB </p>
                            
                        </div>

                    </Cell>
                </Grid>
            </div>
         );
    }
};
 
export default LandingPage;