import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Tooltip from "@material-ui/core/Tooltip";
import Config from '../config'

const styles = theme => ({
    card: {
        width: "230px",
        height: "330px",
        'background-repeat': 'no-repeat',
        'background-position': "center",
        // "background-size": "cover !important"
    },
    cardHover: {
        position: "absolute",
        width: "230px",
        height: "330px",
        opacity: 0,
        '&:hover': {
            opacity: 1,
            "background": "rgba(0, 0, 0, 0.2)",
        },

    },
    grid: {
        height: "100%"
    },
});

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        const {
            classes,
            title,
            image,
            onClick
        } = this.props;
        const imageCss = 'url("'+Config.host + image+'")';
        return (
            <ButtonBase onClick={onClick}>
                <Paper className={classes.card} elevation={4} style={{backgroundImage: imageCss}}>
                </Paper>
                <Tooltip
                    title={title}
                    open={true}
                    PopperProps={{
                        popperOptions: {
                            modifiers: {
                                offset: {
                                    enabled: true,
                                    offset: "0%, -102%"
                                },
                            },
                        },
                    }}
                >
                <Paper className={classes.cardHover}>
                    <Grid className={classes.grid}
                          container
                          direction="column"
                          justify="center"
                          alignItems="center"
                    >
                    </Grid>
                </Paper>
                </Tooltip>
            </ButtonBase>
        );
    }
}

Card.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    image: PropTypes.string,
    onClick: PropTypes.func,
};

export default withStyles(styles)(Card);
