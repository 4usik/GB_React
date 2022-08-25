import { AUTHOR, BOT } from "../../../constants";
import { ADD_MESSAGE, ADD_BOT_MESSAGE } from "../../../constants/addMessage";

const initialState = {
    messageList: {
        'Chat1': [{
            id: 'Chat1.1',
            text: 'message1',
            author: AUTHOR,
        }],
        'Chat2': [{
            id: 'Chat2.1',
            text: 'BotMessage1',
            author: BOT,
        }]
        
    },
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const currentList = state.messageList[action.chatId] || [];
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [
                        ...currentList,
                        {
                            id: `${action.chatId}.${currentList.length+1}`,
                            text: action.message,
                            author: AUTHOR,
                        },
                    ],
                },
            };
        };
        case ADD_BOT_MESSAGE: {
            const currentList = state.messageList[action.chatId] || [];
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [
                        ...currentList,
                        {
                            id: `${action.chatId}.${currentList.length+1}`,
                            text: 'Я бот',
                            author: BOT,
                        },
                    ],
                },
            };
        };
             
        default:
            return state;
    }
};