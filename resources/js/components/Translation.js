import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
    }
}));

const Translation = (props) => {
    let offsetTop = 0;
    if (props.root && props.root.current) {
        offsetTop = props.root.current.offsetTop;
    }
    const style = {
        fontSize: 'initial',
        marginTop: offsetTop + 'px'
    };
    return (
        <div style={style} >{props.text}</div>
    );
};

export default Translation;
