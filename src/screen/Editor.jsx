import React, {useContext, useState} from 'react';
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography, Grid, TextField, Button} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';

import {DataContext, DataEvents} from '../Store';

export default withStyles({
    button: {
        margin: '16px 0 8px 0',
        height: 'calc(100% - 24px)',
    },
    row: {
        '&:hover .fa-minus-circle': {
            opacity: 1
        },
    },
    minusIcon: {
        opacity: 0,
        transition: 'all 0.2s',
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})(function Editor({classes}) {
    const [data, dispatch] = useContext(DataContext);
    const [newListName, setNewListName] = useState('');

    return <div>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<i className="far fa-caret-down" />}>
                <Typography variant="h4">Functions</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container>
                    {Object.keys(data.functions).concat('').map((fun, i) => <Grid
                        container
                        item
                        xs={12}
                        spacing={2} 
                        key={`function-${i}`} 
                        className={classes.row}
                    >
                        <Grid item xs={2}>
                            <TextField
                                label="Name"
                                value={fun}
                                onChange={e => dispatch({
                                    type: DataEvents.CHANGE_FUNCTION_NAME,
                                    oldName: fun,
                                    newName: e.target.value
                                })}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <TextField
                                label="Function"
                                value={(fun && data.functions[fun]) || ''}
                                onChange={e => dispatch({
                                    type: DataEvents.SET_FUNCTION,
                                    fun,
                                    value: e.target.value,
                                })}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={1} className={classes.center}>
                            <i
                                className={`far fa-minus-circle fa-2x ${classes.minusIcon}`}
                                onClick={() => dispatch({
                                    type: DataEvents.REMOVE_FUNCTION,
                                    fun,
                                })}
                            />
                        </Grid>
                    </Grid>)}
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<i className="far fa-caret-down" />}>
                <Typography variant="h4">Lists</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container>
                    {Object.keys(data.lists).map((list, i) => <Grid 
                        container
                        item
                        xs={12}
                        spacing={2} 
                        key={`list-${i}`}
                        className={classes.row}
                    >
                        <Grid item xs={2}>
                            <TextField
                                label="Name"
                                value={list}
                                onChange={e => dispatch({
                                    type: DataEvents.CHANGE_LIST_NAME,
                                    oldName: list,
                                    newName: e.target.value,
                                })}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <TextField
                                label="Items"
                                value={data.lists[list]}
                                onChange={e => dispatch({
                                    type: DataEvents.SET_LIST_ITEM,
                                    i: 0,
                                    list,
                                    value: e.target.value,
                                })}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={1} className={classes.center}>
                            <i
                                className={`far fa-minus-circle fa-2x ${classes.minusIcon}`}
                                onClick={() => dispatch({
                                    type: DataEvents.REMOVE_LIST,
                                    list,
                                })}
                            />
                        </Grid>
                    </Grid>)}
                    <Grid container spacing={2} className={classes.row}>
                        <Grid item xs={2}>
                            <TextField
                                label="Name"
                                value={newListName}
                                onChange={e => setNewListName(e.target.value)}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button 
                                variant="contained" 
                                color="primary"
                                className={classes.button}
                                fullWidth
                                onClick={() => dispatch({
                                    type: DataEvents.ADD_LIST,
                                    list: newListName,
                                })}
                            >
								New List
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<i className="far fa-caret-down" />}>
                <Typography variant="h4">Variables</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container>
                    {Object.keys(data.variables).concat('').map((variable, i) => <Grid 
                        container
                        item
                        xs={12}
                        spacing={2} 
                        key={`variable-${i}`}
                        className={classes.row}
                    >
                        <Grid item xs={2}>
                            <TextField
                                label="Variable"
                                value={variable}
                                onChange={e => dispatch({
                                    type: DataEvents.CHANGE_VARIABLE_NAME,
                                    oldName: variable,
                                    newName: e.target.value,
                                })}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <TextField
                                label="Value"
                                value={(variable && data.variables[variable]) || ''}
                                onChange={e => dispatch({
                                    type: DataEvents.SET_VARIABLE,
                                    variable,
                                    value: e.target.value,
                                })}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={1} className={classes.center}>
                            <i
                                className={`far fa-minus-circle fa-2x ${classes.minusIcon}`}
                                onClick={() => dispatch({
                                    type: DataEvents.REMOVE_VARIABLE,
                                    variable,
                                })}
                            />
                        </Grid>
                    </Grid>)}
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>;
});