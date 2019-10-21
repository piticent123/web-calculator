import React from 'react';
import {Paper} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';

import ExpressionEditor from '../ExpressionEditor';

export default withStyles({
    root: {
        padding: '1rem',
    }
})(function History({ classes }) {
    return <div className={classes.root}>
        <Paper className={classes.equation}>
            <ExpressionEditor />
        </Paper>
    </div>
});