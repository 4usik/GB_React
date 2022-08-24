export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const ADD_BOT_MESSAGE = 'ADD_BOT_MESSAGE';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message,
});

export const addBotMessage = (chatId) => ({
    type: ADD_BOT_MESSAGE,
    chatId,
});