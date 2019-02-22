import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import faker from 'faker';

class Landing extends Component {
    render (){
        return (
            <div style ={{width: '100%',  margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <a href="/" className="avatar">
                            <img alt="avatar" src={faker.image.avatar()}/>
                        </a>
                        <div className="banner-text">
                            <h1>Front End Web Developer</h1>

                            <hr/>
                            <p>HTML/CSS | JavaScript | Node.js | React </p>

                            <div className="social-links">

                                {/* LinkedIn*/}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-linkedin-square"  aria-hidden="true"></i>
                                </a>

                                {/* GitHub*/}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-github-square"  aria-hidden="true"></i>
                                </a>

                                {/* Freecodecamp*/}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-free-code-camp"  aria-hidden="true"></i>
                                </a>
                                {/* Facebook*/}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-facebook-square"  aria-hidden="true"></i>
                                </a>
                                {/* CodePen*/}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank" >
                                    <i class="fa fa-codepen" aria-hidden="true"></i>
                                </a>


                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;