import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent,  } from 'react-mdl';
import faker from 'faker';


class Contact extends Component {
    render (){
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Galina Pody</h2>
                        <a href="/" className="avatar">
                            <img alt="avatar" src={faker.image.avatar()}/>
                        </a>
                        <p style={{width: '75%', margin: 'auto', paddingTop:'1em'}}><h2>Who am I?</h2>
                            I'm the Front-End Developer for EyeCue Lab in Portland, OR.
                            I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                            Let's make something special.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px'}}>
                                        <i className="fa fa-phone-square"  aria-hidden="true"></i>
                                        +44 7549 8544 67</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px'}}>
                                        <i className="fa fa-skype"  aria-hidden="true"></i>
                                        MySkypeId</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px'}}>
                                        <i className="fa fa-envelope"  aria-hidden="true"></i>
                                        My Mail</ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;