import { ADD_CHAT, DELETE_CHAT } from "../../constants/addChat";

const initialState = {
    chatList: [{id: 1, name: 'Chat1' }, {id: 2, name: 'Chat2' }],
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            const chatId = state.chatList[state.chatList.length-1]?.id+1 || 1;
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: chatId,
                        name: `Chat${chatId}`,
                    }
                ]
            };

        case DELETE_CHAT:
            return {
                ...state,
                chatList: [...state.chatList.filter((item) => item.id !== +action.id)],
            };

        default:
            return state;
    }
}
