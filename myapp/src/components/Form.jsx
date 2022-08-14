import React from "react";
import { useRef, useEffect } from "react";
import { TextField, Button } from '@mui/material/';

export function Form(props) {
    const {inputProps, textareaProps, addMessage, messages} = props;
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [messages]);

    function resetFormFields() { // Очищаем форму
        inputProps.reset();
        textareaProps.reset();
    }

    const handleChange = (event) => { // Обработчик отправки формы
        event.preventDefault();
        addMessage();
        resetFormFields();
    }

    return (
        <form>
            <TextField
                inputRef={inputRef}
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch', color: 'white', fontSize: '25px', textAlign: 'left' },
                    }}
                label="Введите Ваше имя"
                {...props.inputProps}/>

            <TextField
                sx={{
                    '& > :not(style)': { m: 1, width: '49ch', color: 'white', fontSize: '25px', textAlign: 'left' },  
                }}
                label="Введите сообщение"
                {...props.textareaProps}/>

            <Button
                sx={{
                    color: 'white',
                    fontSize: '30px'
                }}
            onClick={handleChange}
            >ОТПРАВИТЬ</Button>
            {/* <button type="submit" className="submit">ОТПРАВИТЬ</button> */}
        </form>              

            
    )
}