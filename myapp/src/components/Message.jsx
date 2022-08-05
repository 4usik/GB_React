import React from 'react';
import '../style.css';

export function Message(props) {
    return <h1 className="done">This task: { props.name }</h1>
}