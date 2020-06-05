import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        '&:hover': {
            backgroundColor: 'yellow',
            cursor: 'pointer'
        },
        '&::selection': {
            background: 'cyan',
        },
    },
});

class Word extends React.Component {

    render() {
        const {
            classes,
        } = this.props;
        return (
            <React.Fragment>
                <span className={classes.root} onClick={this.props.onClick}>
                    {this.props.children}
                </span>
            </React.Fragment>
        );
    }
}

Word.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Word);
