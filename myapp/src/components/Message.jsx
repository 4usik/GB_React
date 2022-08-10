import React from 'react';
import '../style.css';
import { Form } from './Form';

export function Message(props) {

    return <>
        <h3>Hello! { props.name }!</h3>
        <h1 className="done">This task: { props.status }</h1>
    </>
    
    
}