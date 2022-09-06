import React from "react";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../constants/addMessage";
import { Form } from "./Form";

export const FormContainer = ({ name }) => {

    const dispatch = useDispatch();

    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const onAddMessage = () => {
        dispatch(addMessage(name, message));
        setMessage('');
    }

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [message]);
    
    return <Form handleChange={handleChange} onAddMessage={onAddMessage} inputRef={inputRef} message={message} />
}