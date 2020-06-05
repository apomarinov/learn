import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Card from "./Card";
import {withRouter} from 'react-router-dom'

const styles = theme => ({

});

class Home extends React.Component {

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
            history
        } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={3} justify={'center'}>
                    <Grid item>
                        <Card
                            title={'Manee Books'}
                            image={'images/maanii.png'}
                            onClick={() => history.push('collection/maanee')}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Home));
