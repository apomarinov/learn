import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {createStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Sticky from 'react-sticky-el';
import Divider from "@material-ui/core/Divider";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            width: '300px',
            top: '20px',
            right: '-85px',
            position: 'absolute',
            '& .MuiGrid-root': {
                padding: '10px 10px 10px 15px'
            }
        },
        paper: {
            position: 'absolute',
            zIndex: '-1',
            width: '100%',
            height: '100%',
        },
    }),
);

export default function Definition(props) {
    const classes = useStyles();
    return (
        <Sticky>
            <ClickAwayListener onClickAway={props.onClose}>
                <div className={classes.container}>
                    <Paper className={classes.paper}/>
                    <Grid container direction={'column'}>
                        <h1>Definition</h1>
                        <Divider/>
                        <Grid item xs={12}>
                            <h2>{props.word.word}</h2>
                        </Grid>
                        <Grid item xs={12}>
                            <i>{props.word.transcription} - {props.word.transliteration}</i>
                        </Grid>
                        <Grid item xs={12}>
                            {props.word.translation}
                        </Grid>
                    </Grid>
                </div>
            </ClickAwayListener>
        </Sticky>
    );
}
