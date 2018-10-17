import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import SendIcon from '@material-ui/icons/Send';

import { Data } from '../../data/frontend';

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


class DataModel extends React.Component {
    constructor(props) {
        super(props)

        this.state = { datas: [] }
    }

    componentDidMount() {
        if (true) {
            this.setState({ datas: Data.slice(0, 1000) })
        }
    }

    render() {
        const { datas } = this.state;
        const { classes } = this.props;

        return (
            <div>
                {datas.map(data => (
                    <Router>
                        <div key={data.id}>
                            {data.item.map(li => (

                                <div key={li.id}>
                                    < Link to={li.page} onClick={() => {document.location.reload()}}>
                                        {data.value == 5
                                            ? <List component="div" disablePadding>
                                                <ListItem button className={classes.nested}>
                                                    <ListItemIcon>
                                                        <SendIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary={li.name} />
                                                </ListItem>
                                            </List>
                                            : null
                                        }
                                    </ Link>
                                </div>

                            ))}
                        </div>
                    </Router>
                ))}
                <Divider />
            </div>

        )
    }

}

DataModel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataModel);