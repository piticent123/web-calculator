import React, {useContext} from 'react';
import {withStyles} from '@material-ui/styles';
import {Grid} from '@material-ui/core';

import {PreferenceContext} from 'components/Store';
import Algebra from 'editor/Algebra';
import Arithmetic from 'editor/Arithmetic';
import Calculus from 'editor/Calculus';
import Statistics from 'editor/Statistics';

export default withStyles({
    root: {
        flex: 1
    },
    equation: {
        margin: '2rem',
        padding: '1rem 2rem'
    }
})(function Editor({classes}) {
    const {editor} = useContext(PreferenceContext);

    function renderEditor() {
        switch (editor) {
            case 'arithmetic': return <Arithmetic />;
            case 'calculus': return <Calculus />;
            case 'statistics': return <Statistics />;
            case 'algebra': return <Algebra />;
            default: return <div />;
        }
    }

    return (<Grid container className={classes.root}>
        {renderEditor()}
    </Grid>);
});