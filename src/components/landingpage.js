import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render (){
        return (
            <div style ={{width: '100%',  margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/99/UP2538-CUSA05620_00-AV00000000000124//image?_version=00_09_000&platform=chihiro&w=720&h=720&bg_color=000000&opacity=100"
                            alt="avatar"
                            className="avatar-img"
                        />
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


                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;