import React from "react";
import { ChatList } from "./ChatList";

export function Homepage(props) {

    const { chats } = props;

    return (
        <>
            <ChatList chats = { chats } />
                
        </>
    );
}