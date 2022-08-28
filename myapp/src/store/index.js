import { createStore, combineReducers } from "redux";
import { chatsReducer } from "../reducers/chats/addChat";
import { profileReducer } from "../reducers/profile/profileCheck";
import { messagesReducer } from "../reducers/messages/addMessage";

const store = createStore(
    combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export { store };