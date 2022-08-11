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

    function addMessage() {
        inputProps.value && textareaProps.value ?
        updateArr({autor: inputProps.value, text: textareaProps.value}) :
        console.log('Не заполнено поле ввода');
    }

    function addBotMessage() {
        let item = messages[messages.length - 1];
        if (item && item.autor !== 'Bot') {
            updateArr({ autor: 'Bot', text: 'Your request has been accepted'})
        }
    }

    useEffect(() => { // Записываем ответ робота в массив сообщений
        let timeout;
        clearTimeout(timeout);
        timeout = setTimeout(addBotMessage, 1000);
    }, [messages]);

    return (
        <div className="content">
            <div className="messageList">
            <MessagesList messages={messages}/>
            </div>
            <Form inputProps = {inputProps} textareaProps={textareaProps} addMessage={addMessage} />
        </div>
    )
}

