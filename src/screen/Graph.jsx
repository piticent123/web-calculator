import React, {useContext, useEffect} from 'react';
import {withStyles} from '@material-ui/styles';
import {evaluate} from 'mathjs';
import range from 'lodash.range';
import Chart from 'chart.js';

import {DataContext, PreferenceContext} from 'components/Store';


export default withStyles({
    root: {
        position: 'relative',
        width: '100%',
        height: '100%',
    }
})(function Graph({ classes }) {
    const ctx = 'chart';
    const [{functions, variables}] = useContext(DataContext);
    const {startX, startY, stepX, stepY, stopX, stopY} = useContext(PreferenceContext);

    useEffect(() => {
        const xValues = range(startX, stopX + 1, stepX);
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: xValues,
                datasets: Object.entries(functions).map(([label, fun]) => ({
                    label,
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgb(255, 0, 0)',
                    data: xValues.map(x => evaluate(fun.replace('x', `(${x})`), variables))
                }))
            },
            options: {
                maintainAspectRatio: false,
            }
        });
    }, [functions, startX, startY, stepX, stepY, stopX, stopY, variables]);

    return <div className={classes.root}>
        <canvas id={ctx} />
    </div>;
});