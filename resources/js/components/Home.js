import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Card from "./Card";
import {withRouter} from 'react-router-dom'
import {getAllCollections} from '../actions/collections'
import GridViewer from "./GridViewer";

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
            match,
            collections
        } = this.props;
        return (
            <div className={classes.root}>
                {collections && (
                    <GridViewer
                        items={collections}
                        baseUrl={match.url}
                        urlResource={'collection'}
                    />
                )}
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
    collections: state.collections.all
});

const mapDispatch = {
    getAllCollections,
};

export default connect(mapState, mapDispatch)(withStyles(styles)(withRouter(Home)));
