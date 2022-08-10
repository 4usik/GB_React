import React from "react";
import { useState } from "react";

function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    function onChange(e) {
        setValue(e.target.value);
    }

    return {
        value,
        onChange
    };
}

export function Form(props) {
    const inputProps = useInput();
    const textareaProps = useInput();

    const [messages, setMessages] = useState([]);

    const updateArr = (message) => {
        messages.push(message)
        setMessages(messages);
        console.log(messages);
    }

    const handleChange = (event) => {
        event.preventDefault();
        updateArr({
            autor: inputProps.value,
            text: textareaProps.value
        });
       
    }

    return (
    <form>
        <div>
            <label>Имя:</label>
            <input className="input" placeholder="Введите Ваше имя" {...inputProps}></input>
        </div>
        
        <textarea className="textarea" placeholder="Введите сообщение" {...textareaProps}></textarea>

        <button type="submit" className="submit" onClick={handleChange}>ОТПРАВИТЬ</button>
    </form>)
}
