import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Card from "./Card";
import {withRouter} from "react-router-dom";

const styles = theme => ({

});

class Collection extends React.Component {

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
                <Grid container spacing={3} justify={'center'}>
                    <Grid item>
                        <Card title={'Manee 1'} image={'images/maanii.png'} onClick={() => history.push(`${match.url}/book/book1`)}/>
                    </Grid>
                    <Grid item>
                        <Card title={'Manee 1'} image={'images/maanii.png'} onClick={() => history.push(`${match.url}/book/book2`)}/>
                    </Grid>
                    <Grid item>
                        <Card title={'Manee 1'} image={'images/maanii.png'} onClick={() => history.push(`${match.url}/book/book3`)}/>
                    </Grid>
                    <Grid item>
                        <Card title={'Manee 1'} image={'images/maanii.png'} onClick={() => history.push(`${match.url}/book/book4`)}/>
                    </Grid>
                    <Grid item>
                        <Card title={'Manee 1'} image={'images/maanii.png'} onClick={() => history.push(`${match.url}/book/book5`)}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Collection.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Collection));
