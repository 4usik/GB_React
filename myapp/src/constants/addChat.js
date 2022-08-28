export const ADD_CHAT = 'ADD_CHAT';
export const DELETE_CHAT = 'DELETE_CHAT';

export const addChat = () => ({
    type: ADD_CHAT
});

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    id
});