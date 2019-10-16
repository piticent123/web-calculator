import React, {useState, useRef} from 'react';
import {BlockMath} from 'react-katex';
import {withStyles} from '@material-ui/styles';

import useInputState from './useInputState';

export default withStyles({
    root: {
        position: 'relative',
        height: '2rem',
        padding: '0.5rem',
    },
    input: {
        position: 'absolute',
        top: 0, 
        left: 0,
        width: '100%',
        height: '100%',
        color: 'rgba(0, 0, 0, 0)',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        zIndex: 10,
        padding: 0,
        border: 0,
    },
    math: {
        position: 'absolute',
        top: 0,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        '& .katex-display': {
            textAlign: 'start',
            margin: 0,
        },
    }
})(function ExpressionEditor({classes}) {
    const input = useRef(null);
    const [math, setMath] = useInputState('');

    function mathToLatex(math) {
        return math
            .replace(/(\d+)\/(\d+)/g, '\\frac{$1}{$2}');
    }

    function focusInput() {
        input.current.focus();
    }

    return (<div className={classes.root}>
        <div onClick={focusInput} className={classes.math}>
            <BlockMath>{mathToLatex(math)}</BlockMath>
        </div>
        <input ref={input} value={math} onChange={setMath} className={classes.input} />
    </div>);
})