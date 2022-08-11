import React from "react";
import { useState, useEffect } from "react";
import { Form } from "./Form";
import { MessagesList } from "./MessagesList";

// Контроллируемая форма
function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    function onChange(e) {
        setValue(e.target.value);
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

export function RenderPage(props) {
    const inputProps = useInput(); // Получаем имя
    const textareaProps = useInput(); // Получаем текст сообщения

    const [messages, setMessages] = useState([]);

    const updateArr = (message) => { // Записываем в массив данные из формы
        const copyArr = [...messages];
        copyArr.push(message);
        setMessages(copyArr);
    }

    useEffect(() => { // Записываем ответ робота в массив сообщений
        let timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const item = messages[messages.length - 1];
            if (item && item.autor !== 'Bot'){
                updateArr({
                    autor: 'Bot',
                    text: 'Your request has been accepted'
                });
            }
        }, 1000);
    }, [messages]);

    function resetFormFields() { // Очищаем форму
        inputProps.reset();
        textareaProps.reset();
    }

    return (
        <div className="content">
            <div className="messageList">
            <MessagesList messages={messages}/>
            </div>
            <Form inputProps = {inputProps} textareaProps={textareaProps} updateArr={updateArr} resetFormFields={resetFormFields}/>
        </div>
    )
}

