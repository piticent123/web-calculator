import React, {useContext} from 'react';
import {Paper} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import {BlockMath} from 'react-katex';

import ExpressionEditor from 'components/ExpressionEditor';
import {DataContext, DataEvents} from 'components/Store';
import {mathToLatex} from 'utils';

export default withStyles({
    root: {
        padding: '1rem',
    }
})(function History({ classes }) {
    const [{history}, dispatch] = useContext(DataContext);

    function calculateExpression(math) {
        dispatch({
            type: DataEvents.ADD_HISTORY_ITEM,
            math,
        });
    }

    return <div className={classes.root}>
        <Paper className={classes.equation}>
            <ExpressionEditor onSubmit={calculateExpression} />
        </Paper>
        {history.map(historyItem => <Paper>
            <BlockMath math={`${mathToLatex(historyItem.input)} = ${mathToLatex(historyItem.output)}`} />
        </Paper>)}
    </div>;
});