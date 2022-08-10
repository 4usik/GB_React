import { useState } from "react";

export function MessagesList(props) {

    return props.messages.map((message) => <div>{'Сообщение от '+ message.autor + ': ' + message.text}</div>);
}



