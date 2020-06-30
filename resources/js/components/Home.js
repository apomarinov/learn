import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Card from "./Card";
import {withRouter} from 'react-router-dom'
import {getAllCollections} from '../actions/collections'

const styles = theme => ({

});

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.props.getAllCollections();
    }

    componentDidMount() {

    }

    render() {
        const {
            classes,
            history,
            collections
        } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={3} justify={'center'}>
                    {collections.map(col => {
                        return (
                        <Grid item key={col.id}>
                            <Card
                                title={col.title}
                                image={col.img}
                                onClick={() => history.push('collection/'+col.title)}
                            />
                        </Grid>);
                    })}
                </Grid>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    getAllCollections: PropTypes.func,
    collections: PropTypes.array,
};

const mapState = state => ({
    collections: state.collections
});

const mapDispatch = {
    getAllCollections,
};

export default connect(mapState, mapDispatch)(withStyles(styles)(withRouter(Home)));
