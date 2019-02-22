import React, { Component } from 'react';
import { Tabs,Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Projects extends Component {
    constructor (props){
        super(props);
        this.state = { activeTab: 0 };
    }

    ToggleCategories (){
    if (this.state.activeTab === 0) {
        return (
            <div className="projects-grid">
                {/*Project1*/}
            <Card shadow={0} style={{width: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.e2matrix.com/blog/wp-content/uploads/2017/12/html-css.jpg) center / cover'}}>HTML/CSS Project1</CardTitle>
                <CardText>
                    Describe own project...
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

                {/*Project2*/}
                <Card shadow={0} style={{width: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.e2matrix.com/blog/wp-content/uploads/2017/12/html-css.jpg) center / cover'}}>HTML/CSS Project2</CardTitle>
                    <CardText>
                        Describe own project...
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/*Project3*/}
                <Card shadow={0} style={{width: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.e2matrix.com/blog/wp-content/uploads/2017/12/html-css.jpg) center / cover'}}>HTML/CSS Project3</CardTitle>
                    <CardText>
                        Describe own project...
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
        )
    } else if (this.state.activeTab ===1) {
        return (
            <div>This is JavaScript </div>
        )
    } else if (this.state.activeTab ===2 ){
        return(
            <div>This is React</div>
        )
    }else if (this.state.activeTab ===3 ){
        return(
            <div>This is Node.js</div>
        )
    }
    }


    render (){
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>HTML/CSS</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>React</Tab>
                    <Tab>Node.js</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.ToggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}
export default Projects;