import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import {withRouter} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import {ListItemText} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    cover: {
        paddingTop: '20px !important',
        '& .image': {
            width: '365px',
            height: '525px',
            background: "url('/images/book1.jpg') no-repeat center"
        }
    },
});

class Book extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {

    }

    render() {
        const {
            classes,
            history,
            match
        } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={3} justify={'center'} alignItems={'stretch'}>
                    <Grid item className={classes.cover}>
                        <Paper elevation={4} className={'image'}/>
                    </Grid>
                    <Grid item  className={classes.lessonList}>
                        <List aria-label="secondary mailbox folders">
                            <ListItem button onClick={() => history.push(`${match.url}/lesson/lesson1`)}>
                                <ListItemText primary="01: Meet Maanee" />
                            </ListItem>
                            <Divider/>
                            <ListItem button onClick={() => history.push(`${match.url}/lesson/lesson2`)}>
                                <ListItemText primary="02: Maanee goes to the ricefield" />
                            </ListItem>
                            <Divider/>
                            <ListItem button onClick={() => history.push(`${match.url}/lesson/lesson3`)}>
                                <ListItemText primary="03: little creature in the ricefield" />
                            </ListItem>
                            <Divider/>
                            <ListItem button onClick={() => history.push(`${match.url}/lesson/lesson4`)}>
                                <ListItemText primary="04: Meet Maanee’s best friend and her cat" />
                            </ListItem>
                            <Divider/>
                            <ListItem button onClick={() => history.push(`${match.url}/lesson/lesson5`)}>
                                <ListItemText primary="05: Meet Dto" />
                            </ListItem>
                            <Divider/>
                            <ListItem button onClick={() => history.push(`${match.url}/lesson/lesson6`)}>
                                <ListItemText primary="06: Maanee looks after her dog “Dto”" />
                            </ListItem>
                            <Divider/>
                            <ListItem button onClick={() => history.push(`${match.url}/lesson/lesson7`)}>
                                <ListItemText primary="07: Guess what’s in Chuujai’s hands?" />
                            </ListItem>
                            <Divider/>
                            <ListItem button onClick={() => history.push(`${match.url}/lesson/lesson8`)}>
                                <ListItemText primary="08: Pretty little hair ribbon" />
                            </ListItem>
                            <Divider/>
                            <ListItem button onClick={() => history.push(`${match.url}/lesson/lesson9`)}>
                                <ListItemText primary="09: The cat and the frog" />
                            </ListItem>
                            <Divider/>
                            <ListItem button onClick={() => history.push(`${match.url}/lesson/lesson10`)}>
                                <ListItemText primary="10: Petting little pet’s friend" />
                            </ListItem>
                            <Divider/>
                            <ListItem button onClick={() => history.push(`${match.url}/lesson/lesson11`)}>
                                <ListItemText primary="11: Meet “bpi-dti” and his horse" />
                            </ListItem>
                            <Divider/>
                            <ListItem button onClick={() => history.push(`${match.url}/lesson/lesson12`)}>
                                <ListItemText primary="12: Scolding the pets" />
                            </ListItem>
                            <Divider/>
                            <ListItem button onClick={() => history.push(`${match.url}/lesson/lesson13`)}>
                                <ListItemText primary="13: Wild animals" />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Book.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Book));
