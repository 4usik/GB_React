import React from "react";
import { useState } from "react";
import { MessagesList } from "./MessagesList";

function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    function onChange(e) {
        setValue(e.target.value);;
    }

    function reset(){
        setValue('');
    }

    return {
        value,
        onChange,
        reset
    };
}

export function Form() {
    const inputProps = useInput();
    const textareaProps = useInput();

    const [messages, setMessages] = useState([]);

    const updateArr = (message) => {
        messages.push(message)
        setMessages(messages);
        console.log(messages);
        return messages;
    }

    function resetFormFields() {
        inputProps.reset();
        textareaProps.reset();
    }

    const handleChange = (event) => {
        event.preventDefault();
        updateArr({
            autor: inputProps.value,
            text: textareaProps.value
        });
        resetFormFields();
    }

    return (
    <form onSubmit={handleChange}>
        <MessagesList messages={messages} />
        <div>
            <label>Имя:</label>
            <input className="input" placeholder="Введите Ваше имя" {...inputProps}></input>
        </div>
        
        <textarea className="textarea" placeholder="Введите сообщение" {...textareaProps}></textarea>

        <button type="submit" className="submit">ОТПРАВИТЬ</button>
    </form>)
}
