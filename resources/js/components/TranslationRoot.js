import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        display: 'none',
    },
}));

const TranslationRoot = React.forwardRef((props, ref) => {
    return (
        <span ref={ref}>{props.children}</span>
    );
});
export default TranslationRoot;
