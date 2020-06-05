import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        width: '10px',
        display: 'inline-block',
    },
});

class Space extends React.Component {

    render() {
        const {
            classes,
            width
        } = this.props;
        return (
            <React.Fragment>
                <span className={classes.root} style={{width: width + 'px'}}>
                </span>
            </React.Fragment>
        );
    }
}

Space.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.number,
};

export default withStyles(styles)(Space);
