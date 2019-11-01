import React, {useContext, useRef, useState, useEffect} from 'react';
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography, Grid, TextField, FormControl, Select, MenuItem, InputLabel} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';

import settings from 'data/settings';
import {PreferenceContext} from 'components/Store';

export default withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    select: {
        width: '100%',
        marginTop: '16px',
        marginBottom: '8px',
    }
})(function Settings({classes}) {
    const preferences = useContext(PreferenceContext);
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current ? inputLabel.current.offsetWidth : 0);
    }, []);

    const Input = ({setting}) => {
        switch (setting.type) {
            case 'select':
                return <FormControl variant="outlined" className={classes.select}>
                    <InputLabel id={`${setting.value}-label`} ref={inputLabel}>
                        {setting.label}
                    </InputLabel>
                    <Select
                        labelId={`${setting.value}-label`}
                        value={preferences[setting.value]}
                        onChange={preferences.set(setting.value)}
                        labelWidth={labelWidth}
                    >
                        {setting.options.map(({label, value}) => <MenuItem value={value}>{label}</MenuItem>)}
                    </Select>
                </FormControl>;
            case 'number':
            default:
                return <TextField
                    fullWidth
                    type={setting.type}
                    id={`setting-${setting}`}
                    label={setting.label}
                    className={classes.textField}
                    value={preferences[setting.value]}
                    onChange={preferences.set(setting.value)}
                    margin="normal"
                    variant="outlined"
                />;
        }
    };

    return <div className={classes.root}>
        {settings.map(({category, settings}, i) => <ExpansionPanel key={`category-${i}`}>
            <ExpansionPanelSummary expandIcon={<i className="far fa-caret-down" />}>
                <Typography variant="h4">{category}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container spacing={2}>
                    {settings.map((setting, j) => (<Grid item key={`setting-${i}-${j}`} xs={12} sm={6}>
                        <Input setting={setting} />
                    </Grid>))}
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>)}
    </div>;
});