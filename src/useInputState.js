import {useState} from 'react';

export default function(d) {
    const [state, setState] = useState(d);
    const set = e => setState(e.target.value);

    return [state, set];
}