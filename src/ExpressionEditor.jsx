import React, {useState, useRef} from 'react';
import {BlockMath} from 'react-katex';
import {withStyles} from '@material-ui/styles';

import useInputState from './useInputState';

export default withStyles({
    root: {
        // background: 'red',
    },
    input: {
        color: 'white',
    },
    math: {

    }
})(function ExpressionEditor({classes}) {
    const input = useRef(null);
    const [math, setMath] = useInputState('');

    function focusInput() {
        input.current.focus();
    }

    return (<div className={classes.root}>
        <span onClick={focusInput} className={classes.math}>
            <BlockMath>{math}</BlockMath>
            </span>
        <input ref={input} value={math} onChange={setMath} />
    </div>);
})