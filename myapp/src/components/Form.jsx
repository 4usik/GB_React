import React from "react";

export function Form(props) {

    const handleChange = (event) => { // Обработчик отправки формы
        event.preventDefault();
        const {inputProps, textareaProps, updateArr, resetFormFields} = props;
        
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
        <form onSubmit={handleChange}>
            
            <div>
                <label>Имя:</label>
                <input className="input" placeholder="Введите Ваше имя" {...props.inputProps}></input>
            </div>
            
            <textarea className="textarea" placeholder="Введите сообщение" {...props.textareaProps}></textarea>

            <button type="submit" className="submit">ОТПРАВИТЬ</button>
        </form>
    )
}