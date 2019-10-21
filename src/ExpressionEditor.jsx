import React, {useState, useRef, useContext} from 'react';
import {BlockMath, InlineMath} from 'react-katex';
import {Popper, List, ListItem, ListItemText, Paper} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';

import {DataContext} from './Store';

const Sources = {
    Variable: 'Variable',
    List: 'List',
    Function: 'Function',
};

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
    },
    popper: {
        width: 'calc(100vw - 2 * (2rem + 10px) - 4px)',
    },
})(function ExpressionEditor({classes}) {
    const input = useRef(null);
    const blockMath = useRef(null);
    const [math, setMath] = useState('');
    const [popper, setPopper] = useState({open: false, suggestions: []});
    const [{functions, lists, variables}] = useContext(DataContext);

    function mathToLatex(math) {
        return math
            .replace(/(\w+|\(.*\))\/(\w+|\(.*\))?/g, '\\frac{$1}{$2}');
    }

    function focusInput() {
        input.current.focus();
    }

    function updateInput({target: {value: newMath}}) {
        const regex = /([A-Za-z]\w*)/g;
        let autocompleteTerm = '';
        let nextTerm;
        while ((nextTerm = regex.exec(newMath)) !== null) autocompleteTerm = nextTerm[0];

        setMath(newMath);

        const matches = thing => autocompleteTerm.length && thing.includes(autocompleteTerm);
        const stringify = list => `[${list.reduce((acc, current) => `${acc}, ${current}`)}]`;
        const suggestions = [
            ...Object.keys(variables).filter(matches).map(variable => ({
                source: Sources.Variable,
                name: variable.replace(autocompleteTerm, `<strong>${autocompleteTerm}</strong>`),
                value: variables[variable],
            })),
            ...Object.keys(lists).filter(matches).map(list => ({
                source: Sources.List,
                name: list.replace(autocompleteTerm, `<strong>${autocompleteTerm}</strong>`),
                value: stringify(lists[list]),
            })),
            ...Object.keys(functions).filter(matches).map(fun => ({
                source: Sources.Function,
                name: fun.replace(autocompleteTerm, `<strong>${autocompleteTerm}</strong>`),
                value: functions[fun],
            })),
        ];

        setPopper({
            open: !!(newMath && /[A-Za-z]/.exec(newMath[newMath.length - 1]) && suggestions.length),
            suggestions,
        });
    }

    function stringifySuggestion({source, name, value}) {
        return <span><span style={{color: 'grey'}}>[{source}]</span> <span dangerouslySetInnerHTML={{__html: name}} /> - <InlineMath>{value}</InlineMath></span>;
    }

    return (<div className={classes.root} ref={blockMath}>
        <div onClick={focusInput} className={classes.math}>
            <BlockMath>{mathToLatex(math)}</BlockMath>
        </div>
        <input ref={input} value={math} onChange={updateInput} className={classes.input} spellCheck={false} />
        <Popper open={popper.open} anchorEl={popper.open ? blockMath.current : undefined} placement="bottom" transition>
            <Paper className={classes.popper}>
                <List>
                    {popper.suggestions.map((suggestion, i) => <ListItem button key={i}>
                        <ListItemText primary={stringifySuggestion(suggestion)} />
                    </ListItem>)}
                </List>
            </Paper>
        </Popper>
    </div>);
});
