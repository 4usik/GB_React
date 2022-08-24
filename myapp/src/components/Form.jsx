import React from "react";
import { useState, useRef, useEffect } from "react";
import { TextField, Button } from '@mui/material/';
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../constants/addMessage";

export const Form = (props) => {

    const {name} = props;

    const dispatch = useDispatch();

    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
    }
    const onClick = () => {
        dispatch(addMessage(name, message));
        setMessage('');
    }

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [message]);
    
    return(
        <div className="form">
            <TextField
                inputRef={inputRef}
                sx={{
                    '& > :not(style)': { m: 1, width: '49ch', color: 'white', fontSize: '25px', textAlign: 'left' },  
                }}
                label="Введите сообщение"
                value={message}
                onChange={handleChange}
            />
            <Button onClick={onClick}
                sx={{
                    color: 'white',
                    fontSize: '25px'
                }}
                >
                    ОТПРАВИТЬ
                </Button>

        </div>
    )
}