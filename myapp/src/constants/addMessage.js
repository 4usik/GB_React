export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_BOT_MESSAGE = 'ADD_BOT_MESSAGE';
export const DEL_MESSAGES_WITH_CHAT= 'DEL_MESSAGES_WITH_CHAT';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message,
});

export const addBotMessage = (chatId) => ({
    type: ADD_BOT_MESSAGE,
    chatId,
});

export const deleteMessagesWithChat = (chatId) => ({
    type: DEL_MESSAGES_WITH_CHAT,
    chatId,
})