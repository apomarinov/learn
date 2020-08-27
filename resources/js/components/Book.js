import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import {useHistory, useParams, useRouteMatch, withRouter} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import {ListItemText} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import {useDispatch, useSelector} from "react-redux";
import {getCollection} from "../actions/collections";
import GridViewer from "./GridViewer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {getBook} from "../actions/books";
import Card from "./Card";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    cover: {
        paddingTop: '20px !important',
        '& .image': {
            width: '365px',
            height: '525px',
            background: "url('/images/book11.jpg') no-repeat center"
        }
    },
}));

export default function Book() {
    const classes = useStyles();
    const history = useHistory();
    const match = useRouteMatch();
    const book = useSelector(state => state.books.current);
    if (!book) {
        const {collection, book: slug} = useParams();
        useDispatch()(getBook(collection, slug));
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify={'center'} alignItems={'stretch'}>
                <Grid item className={classes.cover}>
                    <Paper elevation={4} className={'image'}/>
                </Grid>
                <Grid item  className={classes.lessonList}>
                    <List aria-label="secondary mailbox folders">
                        {book && book.lessons.map(lesson => {
                            return (
                                <div key={lesson.slug}>
                                    <Divider/>
                                    <ListItem button onClick={() => history.push(`${match.url}/lessons/${lesson.slug}`)}>
                                        <ListItemText primary={lesson.title} />
                                    </ListItem>
                                </div>
                            );
                        })}
                    </List>
                </Grid>
            </Grid>
        </div>
    );
};
