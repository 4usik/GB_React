import React from 'react';
import '../style.css';

export function Message(props) {

    return <>
        <h3>Hello! { props.name }!</h3>
        <h1 className="done">This task: { props.status }</h1>
    </>
    
    
}