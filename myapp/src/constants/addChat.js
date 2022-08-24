export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';

export const addChat = () => ({
    type: ADD_CHAT
});

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    id
});