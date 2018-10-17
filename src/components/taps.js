import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classes'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


import { Data } from '../data/frontend';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
    line_like: {
        textDecoration: 'none'
    }
});

class Tabs extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            datas: [],
            openProblemDetermination: true,
            openDemandAnalysis: true,
            openProcessModeling: true,
            openDataModel: true
        }
    }

    componentDidMount() {
        if (true) {
            this.setState({ datas: Data.slice(0, 1000) })
        }
    }

    handleClick = (value) => {

        if (value == 2) {
            this.setState(state => ({
                openProblemDetermination: !state.openProblemDetermination
            }));
            console.log(value);
        }
        if (value == 3) {
            this.setState(state => ({
                openDemandAnalysis: !state.openDemandAnalysis

            }));
            console.log(value);
        }
        if (value == 4) {
            this.setState(state => ({
                openProcessModeling: !state.openProcessModeling

            }));
            console.log(value);
        }
        if (value == 5) {
            this.setState(state => ({
                openDataModel: !state.openDataModel

            }));
            console.log(value);
        }

    };

    render() {
        const { datas } = this.state
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {datas.map(data => (
                        <div key={data.id}>
                            <List component="nav" >
                                <Link to={data.page} className={classes.line_like} >
                                    <ListItem button onClick={() => this.handleClick(data.value)}>
                                        <ListItemText primary={data.name} />
                                        {data.status ? <div>
                                            {data.value == 2
                                                ? <div>
                                                    {
                                                        this.state.openProblemDetermination ? <ExpandLess /> : <ExpandMore />
                                                    }
                                                </div>
                                                : <div />
                                            }
                                            {data.value == 3
                                                ? <div>
                                                    {
                                                        this.state.openDemandAnalysis ? <ExpandLess /> : <ExpandMore />
                                                    }
                                                </div>
                                                : <div />
                                            }
                                            {data.value == 4
                                                ? <div>
                                                    {
                                                        this.state.openProcessModeling ? <ExpandLess /> : <ExpandMore />
                                                    }
                                                </div>
                                                : <div />
                                            }
                                            {data.value == 5
                                                ? <div>
                                                    {
                                                        this.state.openDataModel ? <ExpandLess /> : <ExpandMore />
                                                    }
                                                </div>
                                                : <div />
                                            }
                                        </div> : <div />}
                                    </ListItem>
                                </Link>
                                {data.line ? <Divider /> : <div />}

                            </List>
                            {data.item.map(li => (
                                <div key={li.id}>
                                    < Link to={li.page} className={classes.line_like} >
                                        {data.value == 2
                                            ? <Collapse in={this.state.openProblemDetermination} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    <ListItem button className={classes.nested} >
                                                        <ListItemText primary={li.name} />
                                                    </ListItem>
                                                </List>
                                            </Collapse>
                                            : null
                                        }
                                        {data.value == 3
                                            ? <Collapse in={this.state.openDemandAnalysis} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    <ListItem button className={classes.nested}>
                                                        <ListItemText primary={li.name} />
                                                    </ListItem>
                                                </List>
                                            </Collapse>
                                            : null
                                        }
                                        {data.value == 4
                                            ? <Collapse in={this.state.openProcessModeling} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    <ListItem button className={classes.nested}>
                                                        <ListItemText primary={li.name} />
                                                    </ListItem>
                                                </List>
                                            </Collapse>
                                            : null
                                        }
                                        {data.value == 5
                                            ? <Collapse in={this.state.openDataModel} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    <ListItem button className={classes.nested}>
                                                        <ListItemText primary={li.name} />
                                                    </ListItem>
                                                </List>
                                            </Collapse>
                                            : null
                                        }
                                    </ Link>
                                </div>
                            ))}

                           
                        </div>
                ))}

            </div>

        )
    }
}

Tabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tabs);
