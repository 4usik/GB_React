import { ADD_CHAT, DELETE_CHAT } from "../../../constants/addChat";

const initialState = {
    chatList: [{id: 'id1', name: 'Chat1' }, {id: 'id2', name: 'Chat2' }],
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: `id${state.chatList.length+1}`,
                        name: `Chat${state.chatList.length+1}`,
                    }
                ]
            };

        case DELETE_CHAT:
            return {
                ...state,
                chatList: [...state.chatList.filter((item) => item.id !== action.id)],
            };

        default:
            return state;
    }
}
