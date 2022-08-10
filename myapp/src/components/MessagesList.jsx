import { useState } from "react";

export function MessagesList(props) {
    
    // console.log(props.arr);

    const [messages, setMessages] = useState(props.arr);


    return messages.map((message) => <div>{message}</div>);
}



