import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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

export function Form(props) {
    const inputProps = useInput(); // Получаем имя
    const textareaProps = useInput(); // Получаем текст сообщения

    const [messages, setMessages] = useState([]);

    const updateArr = (message) => { // Записываем в массив данные из формы
        messages.push(message)
        setMessages(messages);
        resetFormFields();
        return messages;
    }

    useEffect(() => { // Записываем ответ робота в массив сообщений
        const item = messages[messages.length-1];

        if (item){
            updateArr({
                autor: 'Robot',
                text: 'Your request has been accepted'
            });
            
        }
    }, [messages.length]);

    function resetFormFields() { // Очищаем форму
        inputProps.reset();
        textareaProps.reset();
    }

    const handleChange = (event) => { // Обработчик отправки формы
        event.preventDefault();
        
        if(inputProps.value && textareaProps.value) {
            updateArr({
                autor: inputProps.value,
                text: textareaProps.value
            });
        } else {
            console.log('Не заполнено поле ввода');
        }
        resetFormFields();
    }

    return (
        <div className="content">
            <div className="messageList">
                <MessagesList messages={messages} />
            </div>
            
            <form onSubmit={handleChange}>
                
                <div>
                    <label>Имя:</label>
                    <input className="input" placeholder="Введите Ваше имя" {...inputProps}></input>
                </div>
                
                <textarea className="textarea" placeholder="Введите сообщение" {...textareaProps}></textarea>

                <button type="submit" className="submit">ОТПРАВИТЬ</button>
            </form>
        </div>
    )
}

