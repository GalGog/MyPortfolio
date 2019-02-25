import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import faker from 'faker';
import Education from './education';
import Experience from './experience';
import Skills from './skills';




class Resume extends Component {
    render (){
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                    <div style={{textAling: 'center'}}>
                        <img style={{height: '200px'}} alt="avatar" src={faker.image.avatar()}/>
                    </div>
                        <h2 style={{paddingTop: '2em'}}>Galina Pody</h2>
                        <h2 style={{color: 'grey'}}>Programmer</h2>
                        <hr style={{borderTop: '3px solid ', width: '50%'}} />
                        <p>I'm the Front-End Developer for EyeCue Lab in Portland, OR.
                            I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                            Let's make something special.</p>
                        <hr style={{borderTop: '3px solid ', width: '50%'}} />
                        <h4>Adress</h4>
                        <p>13 Shephard Dv London</p>
                        <h4>Phone</h4>
                        <p>7549 8544 67</p>
                        <h4>Mail</h4>
                        <p>gmail.com</p>
                        <h4>Web</h4>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid ', width: '50%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                        startYear = {2012}
                        endYear ={2016}
                        schoolName = "National Technical University of Ukraine «Kyiv Polytechnic Institute»"
                        schoolDescription = "Bachelor 's degree in Avionic, Faculty of aviation and space systems"
                        />
                        <Education
                            startYear = {2017}
                            endYear ={2018}
                            schoolName = "North Hertfordshire College"
                            schoolDescription = "ESOL course"
                        />
                        <Education
                            startYear = {2017}
                            endYear ={2018}
                            schoolName = "Additional Education"
                            schoolDescription = "Courses:"
                        />
                        <hr style={{borderTop: '3px solid '}} />
                        <h2>Expiriense</h2>

                        <Experience
                            startYear = {2017}
                            endYear ={2018}
                            jobName = "First job"
                            jobDescription = "Description"
                        />
                        <Experience
                            startYear = {2017}
                            endYear ={2018}
                            jobName = "Secon job"
                            jobDescription = "Description"
                        />
                        <hr style={{borderTop: '3px solid '}} />
                        <h2>Skills</h2>
                        <Skills
                        skills="HTML/CSS"
                        progress={80}
                        />
                        <Skills
                            skills="JavaScript"
                            progress={70}
                        />
                        <Skills
                            skills="React"
                            progress={50}
                        />



                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;
