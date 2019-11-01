import React from 'react';
import {withStyles} from '@material-ui/styles';
import {InlineMath} from 'react-katex';

import {mathToLatex} from 'utils';

export default withStyles({
    grid: {
        display: 'grid',
        width: '100%',
        padding: '10px',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '10px',
        gridAutoRows: 'auto',
    },
    gridItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #CCC',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        '&:hover': {
            border: '1px solid black',
            backgroundColor: 'white',
        },
        '&:last-child': {
            gridColumn: '3 / 5',
        },
    },
})(function Arithmetic({classes}) {
    return <div className={classes.grid}>
        {['+/-', 'sqrt(', '%', '+', 
            '7', '8', '9', '*', 
            '4', '5', '6', '-', 
            '1', '2', '3', '+', 
            '0', '.', '='
        ].map((button, i) => <div className={classes.gridItem} key={i}>
            <InlineMath math={mathToLatex(button)} />
        </div>)}
    </div>;
});